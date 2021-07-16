import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './../../common/global-constants';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-vendor-setup-account',
  templateUrl: './vendor-setup-account.component.html',
  styleUrls: ['./vendor-setup-account.component.css']
})
export class VendorSetupAccountComponent implements OnInit {


  isError:boolean = false;
  error:string = "الرجاء إدخال جميع البيانات";
  token:string = "";
  loginStatus:number=0;
  vendorData:any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(window.localStorage.getItem("vendor") != "" && window.localStorage.getItem("vendor") != null) {
      this.token = JSON.parse(window.localStorage.getItem("vendor")).token;
    } else {
      this.router.navigate(['/vendor/login']);
    }
    
    this.http.post(GlobalConstants.apiURL+"api/vendors/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.vendorData = data["vendor"];
    });
  }


  saveChanges() {
    
    this.token = JSON.parse(window.localStorage.getItem("vendor")).token;
    this.http.post(GlobalConstants.apiURL+"api/vendors/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
        "first_name":(document.getElementById("first_name") as HTMLTextAreaElement).value,
        "last_name":(document.getElementById("last_name") as HTMLTextAreaElement).value,
        "mobile":(document.getElementById("mobile") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) {
        //console.log(data);
        this.router.navigate(['vendor/dashboard']);
      } else {
        /*console.log(data);
        this.isError = true;
        setTimeout(function() {
          this.isError = false;
        }, 2000);*/
      }
    });
  }

  logout() {
    this.http.post(GlobalConstants.apiURL+"api/vendors/logout", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
    }).subscribe(data => {
      if(data["status"] == true) {
        this.loginStatus = 0;
        window.localStorage.setItem("vendor", "");
        console.log(123)
        this.router.navigate(['/vendor/login']);
      }
    });
  }

}
