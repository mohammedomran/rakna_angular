import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  token:string = "";
  orders:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    }
    this.http.post(GlobalConstants.apiURL+"api/users/orders", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.orders = data["orders"];
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
