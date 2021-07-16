import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  token:string = "";
  products:any = [];
  loginStatus:number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    if(window.localStorage.getItem("user") && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
        "api_pass":GlobalConstants.apiPass,
          "token": this.token,
      }).subscribe(data => {
        if(data["status"] == false) {
          this.loginStatus = 0;
        } else {
          this.loginStatus = 1;
          this.http.post(GlobalConstants.apiURL+"api/wishlists/show", {
            "api_pass":GlobalConstants.apiPass,
            "token":this.token,
          }).subscribe(data => {
            this.products = data["wishlist"]["products"];
          });
        }
      });
    }

    

  }

  selected_products:any = [];  
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

  deleteFromWishlist(id) {
    this.http.post(GlobalConstants.apiURL+"api/wishlists/delete", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "product_id":id
    }).subscribe(data => {
      this.products = data["wishlist"][0]["products"];
    });
  }

}
