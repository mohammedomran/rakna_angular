import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-new-offers',
  templateUrl: './new-offers.component.html',
  styleUrls: ['./new-offers.component.css']
})
export class NewOffersComponent implements OnInit {

  

  loginStatus:number = 0;
  showWishlistAlert:number = 0;
  token:string = "";
  products:any = [];
  selected_products:any = [];

  constructor(private http: HttpClient) { }

  adminData:{};

  ngOnInit(): void {

    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
        "api_pass":GlobalConstants.apiPass,
        "token": this.token,
      }).subscribe(data => {
        if(data["status"] == true) {
          this.loginStatus = 1;
        }
      });
    }

    this.http.post(GlobalConstants.apiURL+"api/products/offers", {
      "api_pass":GlobalConstants.apiPass,
    }).subscribe(data => {
      this.products = data["offers"];
    });

  }

  addToCart(id) {
    let stored_products = JSON.parse(window.localStorage.getItem("selected_products"));
    if(stored_products == null) {
      this.selected_products.push(id);
      window.localStorage.setItem("selected_products", JSON.stringify(this.selected_products));
      this.selected_products = [];
    } else {
      if(stored_products.indexOf(id) == -1) {
        stored_products.push(id);
        window.localStorage.setItem("selected_products", JSON.stringify(stored_products));
      }
    }

  }

  
  
  addToWishList(e, id) {
    if(this.loginStatus) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/wishlists/store", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "product_id":[id]
      }).subscribe(data => {
      });
    } else {
      this.showWishlistAlert = 1;
    }
  }
  
  changeshowWishlistAlert() {
    this.showWishlistAlert = 0;
  }



}
