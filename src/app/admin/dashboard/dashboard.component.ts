import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  adminData:any = {};
  token:string = "";
  loginStatus:number = 0;

  ngOnInit(): void {

    if(window.localStorage.getItem("admin") != "" && window.localStorage.getItem("admin") != null) {
      this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    } else {
      this.route.navigate(['/admin/login']);
    }

    
    this.http.post(GlobalConstants.apiURL+"api/admins/check_login_status", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      if(data["status"] == false) {
        this.route.navigate(['/admin/login']);
      }
    });
    
    
    this.http.post(GlobalConstants.apiURL+"api/admins/show", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.adminData = data["admin"];
    });

    if(
      this.route.url.split('/')[2] == "stats" ||
      this.route.url.split('/')[2] == "users" ||
      this.route.url.split('/')[2] == "products" ||
      this.route.url.split('/')[2] == "parking" ||
      this.route.url.split('/')[2] == "history" ||
      this.route.url.split('/')[2] == "categories" ||
      this.route.url.split('/')[2] == "editors" ||
      this.route.url.split('/')[2] == "admins" ||
      this.route.url.split('/')[2] == "vendors" ||
      this.route.url.split('/')[2] == "reviews" ||
      this.route.url.split('/')[2] == "orders" ||
      this.route.url.split('/')[2] == "complaints" ||
      this.route.url.split('/')[2] == "offers" ||
      this.route.url.split('/')[2] == "chat" ||
      this.route.url.split('/')[2] == "colors" 
    ) {
      
      let elements = document.querySelector("."+this.route.url.split('/')[2]).parentElement.children;
      for(let i=0; i< elements.length; i++) {
        elements[i].classList.remove("active");
      }

      document.querySelector("."+this.route.url.split('/')[2]).classList.add("active");

    }
  }
  


  addActiveClass(e) {
    if(
      this.route.url.split('/')[2] == "stats" ||
      this.route.url.split('/')[2] == "users" ||
      this.route.url.split('/')[2] == "products" ||
      this.route.url.split('/')[2] == "parking" ||
      this.route.url.split('/')[2] == "history" ||
      this.route.url.split('/')[2] == "categories" ||
      this.route.url.split('/')[2] == "editors" ||
      this.route.url.split('/')[2] == "admins" ||
      this.route.url.split('/')[2] == "vendors" ||
      this.route.url.split('/')[2] == "reviews" ||
      this.route.url.split('/')[2] == "orders" ||
      this.route.url.split('/')[2] == "complaints" ||
      this.route.url.split('/')[2] == "offers" ||
      this.route.url.split('/')[2] == "chat" ||
      this.route.url.split('/')[2] == "colors"
    ) {
      
      let elements = document.querySelector("."+this.route.url.split('/')[2]).parentElement.children;
      for(let i=0; i< elements.length; i++) {
        elements[i].classList.remove("active");
      }

      document.querySelector("."+this.route.url.split('/')[2]).classList.add("active");

    }
  }

  logout() {
    this.http.post(GlobalConstants.apiURL+"api/admins/logout", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
    }).subscribe(data => {
      if(data["status"] == true) {
        this.loginStatus = 0;
        window.localStorage.setItem("admin", "");
        console.log(123)
        this.route.navigate(['/admin/login']);
      }
    });
  }

}
