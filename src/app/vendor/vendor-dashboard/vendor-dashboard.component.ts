import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {


  constructor(private route: Router, private http: HttpClient) { }

  vendorData:{};
  token:string = "";
  loginStatus:number = 0;
  shipments:any = [];
  total_shipments_price:number = 0;
  total_payed:number = 0;
  total_not_payed:number = 0;

  ngOnInit(): void {

    if(window.localStorage.getItem("vendor") != "" && window.localStorage.getItem("vendor") != null) {
      this.token = JSON.parse(window.localStorage.getItem("vendor")).token;
    } else {
      this.route.navigate(['/vendor/login']);
    }

    this.http.post(GlobalConstants.apiURL+"api/vendors/check_login_status", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      if(data["status"] == false) {
        this.route.navigate(['/vendor/login']);
      }
    });
    
    
    this.http.post(GlobalConstants.apiURL+"api/vendors/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.vendorData = data["vendor"];
    });

    this.http.post(GlobalConstants.apiURL+"api/vendors/shipments_stats", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      if(data["code"]==200) {
        this.shipments = data["shipments"];
        for (let i = 0; i < data["shipments"].length; i++) {
          this.total_shipments_price += parseInt(data["shipments"][i].price);
          for (let j = 0; j < data["shipments"][i]["bills"].length; j++) {
            this.total_payed += parseInt(data["shipments"][i]["bills"][j].price);
          }
        }
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
        this.route.navigate(['/vendor/login']);
      }
    });
  }


}
