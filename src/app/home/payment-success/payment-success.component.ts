import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';
import { Router } from "@angular/router"

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  
  loginStatus:number = 0;
  token:string = "";
  paymentStatus:number = 0;
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
        "api_pass":GlobalConstants.apiPass,
        "token": this.token,
      }).subscribe(data => {
        if(data["status"] == true) {
          this.loginStatus = 1;
          this.check_order_status()
        }
      });
    }


      

    /*this.http.post(GlobalConstants.apiURL+"api/orders/check_order_status", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
    }).subscribe(data => {
      //console.log(data)
    });*/

  }

  check_order_status() {
    this.http.post(GlobalConstants.apiURL+"api/orders/check_order_status", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      if(data["code"]==200) {
        data["payment_status"] ? this.paymentStatus=1 : this.paymentStatus=-1
      }
    });
  }

}
