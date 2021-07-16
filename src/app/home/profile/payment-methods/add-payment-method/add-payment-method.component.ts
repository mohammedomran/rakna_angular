import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.css']
})
export class AddPaymentMethodComponent implements OnInit {


  token:string = "";
  user:any = {};
  payment_methods:any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post(GlobalConstants.apiURL+"api/payment-methods/index", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.payment_methods = data["payment_methods"];
      console.log(data);
    });

  }


  storeMethod() {
    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post(GlobalConstants.apiURL+"api/users-payment-methods/store", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "owner":(document.getElementById("owner") as HTMLTextAreaElement).value,
        "number":(document.getElementById("number") as HTMLTextAreaElement).value,
        "expire-year":(document.getElementById("expire-year") as HTMLTextAreaElement).value,
        "expire-month":(document.getElementById("expire-month") as HTMLTextAreaElement).value,
        "cvv":(document.getElementById("cvv") as HTMLTextAreaElement).value,
        "payment_method_id":(document.querySelector('input[name="method"]:checked') as HTMLTextAreaElement).value

    }).subscribe(data => {
      if(data["code"] == 200) {
        this.router.navigate(["/profile/payment-methods"]);
      }
    });
  }


}
