import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {


  constructor(private route: Router, private http: HttpClient) { }

  vendorData:{};
  token:string = "";
  loginStatus:number = 0;
  shipments:any = [];

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
      }
    });

    

  }

  count_not_payed(bills) {
    let not_payed = 0;
    for (let i = 0; i < bills.length; i++) {
      not_payed += parseInt(bills[i].price);
    }
    return not_payed;
  }
  count_payed(shipment,bills) {
    let payed = 0;
    for (let i = 0; i < bills.length; i++) {
      payed += parseInt(bills[i].price);
    }
    return shipment.price-payed;
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
