import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-all-orders',
  templateUrl: './show-all-orders.component.html',
  styleUrls: ['./show-all-orders.component.css']
})
export class ShowAllOrdersComponent implements OnInit {

  token:string = "";
  orders:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/orders/index", {
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
    this.http.post(GlobalConstants.apiURL+"api/orders/change", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "status":status,
      "id":id,
    }).subscribe(data => {
      if(data["code"]==200) {
        this.orders = data["orders"];
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
