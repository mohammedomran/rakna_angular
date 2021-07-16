import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-under-delivery-orders',
  templateUrl: './show-under-delivery-orders.component.html',
  styleUrls: ['./show-under-delivery-orders.component.css']
})
export class ShowUnderDeliveryOrdersComponent implements OnInit {

  token:string = "";
  orders:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/orders/under_delivery", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.orders = data["orders"];
          console.log(this.orders);
        }
      });
  }

  update(status, id, e) {
    this.http.post(GlobalConstants.apiURL+"api/orders/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "status":status,
      "id":id,
    }).subscribe(data => {
      if(data["code"]==200) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    });
  }

  
  countPrice(products) {
    let orderPrice = 0;
    for (let i = 0; i < products.length; i++) {
      orderPrice += products[i].pivot["quantity"]*products[i]["price"];
    }
    return orderPrice;
  }
}
