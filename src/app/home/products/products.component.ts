import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterStatus:number=1;
  productsStatus:number=1;
  isMobile:number=0;
  token:string = "";
  products:any = [];
  categories:any = [];
  colors:any = [];

  selected_products:any = [];
  selected_categories:any = [];
  categories_ids:any = [];
  selected_colors:any = [];
  colors_ids:any = [];

  loginStatus:number = 0;
  showWishlistAlert:number = 0;



  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    if(screen.width < 600) {
      this.isMobile = 1;
      this.filterStatus = 1;
      this.productsStatus = 1;
    } else {
      this.isMobile = 0;
      this.productsStatus = 1;
      this.filterStatus = 0;
    }

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
    
    this.http.post(GlobalConstants.apiURL+"api/products/show_products", {
        "api_pass":GlobalConstants.apiPass,
    }).subscribe(data => {
      this.products = data["products"];
    });


    this.http.post(GlobalConstants.apiURL+"api/categories/index", {
      "api_pass":GlobalConstants.apiPass,
    }).subscribe(data => {
      this.categories = data["categories_data"]["categories"];

      for (let i = 0; i < this.categories.length; i++) {
        this.categories_ids.push(this.categories[i]["id"]);
      }

    });

    this.http.post(GlobalConstants.apiURL+"api/colors/index", {
      "api_pass":GlobalConstants.apiPass,
    }).subscribe(data => {
      
      this.colors = data["colors_data"]["colors"];

      for (let i = 0; i < this.colors.length; i++) {
        this.colors_ids.push(this.colors[i]["id"]);
      }
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

  updateCategory(e) {
    if(e.target.nodeName == "INPUT") {
      if(this.selected_categories.indexOf(e.target.value) == -1) {
        this.selected_categories.push(e.target.value);
      } else {
        this.selected_categories.splice(this.selected_categories.indexOf(e.target.value), 1);
      }
    }
  }
  
  updateColor(e) {
    if(e.target.nodeName == "I") {
      if(this.selected_colors.indexOf(e.target.id) == -1) {
        this.selected_colors.push(e.target.id);
        e.target.classList.add("fa-check-square");
        e.target.classList.remove("fa-square");
      } else {
        this.selected_colors.splice(this.selected_colors.indexOf(e.target.id), 1);
        e.target.classList.add("fa-square");
        e.target.classList.remove("fa-check-square");
      }
    }
  }

  updateProducts() {
    let minPrice = (document.getElementById("minPrice") as HTMLTextAreaElement).value;
    let maxPrice = (document.getElementById("maxPrice") as HTMLTextAreaElement).value;
    
    this.http.post(GlobalConstants.apiURL+"api/products/filter", {
      "api_pass":GlobalConstants.apiPass,
      "minPrice":parseInt(minPrice),
      "maxPrice":parseInt(maxPrice),
      "selected_categories":(this.selected_categories.length != 0) ? this.selected_categories : this.categories_ids,
      "selected_colors":(this.selected_colors.length != 0) ? this.selected_colors : this.colors_ids,
    }).subscribe(data => {
      this.products = data["products"];
    });

  }

  changeshowWishlistAlert() {
    this.showWishlistAlert = 0;
  }


  changeFilterStatus() {
    if(screen.width<600) {
      this.filterStatus ? this.filterStatus=0 : this.filterStatus=1;
      this.productsStatus ? this.productsStatus=1 : this.productsStatus=0;
    } else {
      this.filterStatus ? this.filterStatus=0 : this.filterStatus=1;
    }
  }


}
