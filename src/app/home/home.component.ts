import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../common/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token:string = "";
  loginStatus:number = 0;
  showWishlistAlert:number = 0;
  selected_products:any = [];
  banners:any = [];

  products:any = [];
  constructor(private http: HttpClient) { }
  x:number = 0;


  
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
    this.http.post(GlobalConstants.apiURL+"api/banners/index", {
      "api_pass":GlobalConstants.apiPass,
    }).subscribe(data => {
      this.banners = data["banners"];
    });

  }

  getAvg(e) {
    this.x = 0;
    for(var i=0; i<e.length; i++) {
      this.x = this.x + parseInt(e[i].stars);
    }
    if(e.length > 0) {
      return new Array(Math.ceil(this.x/e.length));
    } else {
      return new Array(0);
    }
  }
  returnArray(e) {
    return new Array(e);
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
