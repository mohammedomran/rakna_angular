import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private router: ActivatedRoute) { }

  vendorData:{};
  shipment:any = {};
  token:string = "";
  loginStatus:number = 0;
  shipments:any = [];
  shipmentId:number;

  ngOnInit(): void {

    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.shipmentId = id;

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

    this.http.post(GlobalConstants.apiURL+"api/shipments/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
        "id":this.shipmentId
    }).subscribe(data => {
      if(data["code"]==200) {
        console.log(data)
        this.shipment = data["shipment"];
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
