import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  token:string = "";
  user:any = {};
  payment_methods:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post(GlobalConstants.apiURL+"api/users/payment-methods", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.payment_methods = data["user_payment_methods"].methods;
    });
    
  }

  deleteMethod(e, id) {
    this.http.post(GlobalConstants.apiURL+"api/users-payment-methods/delete", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "user_payment_method_id":id
    }).subscribe(data => {
      if(data["code"] == 200) {
        e.target.parentElement.parentElement.remove();
      }
    });
  }

  makePrimary(id) {
    this.http.post(GlobalConstants.apiURL+"api/users-payment-methods/make_primary", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
        "user_payment_method_id":id
    }).subscribe(data => {
      /*if(data["code"] == 200) {
        e.target.parentElement.parentElement.remove();
      }*/
      this.payment_methods = data["user_payment_methods"].methods;
    });
  }

  

}
