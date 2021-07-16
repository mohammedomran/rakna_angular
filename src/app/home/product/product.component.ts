import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  showLoginAlert:number = 0;
  loginStatus:number = 0;

  selected_products:any = [];

  public productId: number;
  product:any = {};
  token:string = "";
  x:number;
  showWishlistAlert:number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    
    this.http.post(GlobalConstants.apiURL+"api/products/show", {
      "api_pass":GlobalConstants.apiPass,
      "productId":this.productId,
    }).subscribe(data => {
      this.product = data["product"];
    });

  }

  getImage(e) {
    document.getElementById("main_image").style.backgroundImage = 'url('+e.target.style.backgroundImage.replace(/(url\(|\)|")/g, '')+')';
  }

  showAddReviewBox() {
    if(this.loginStatus) {
      document.getElementById("reviewBox").style.display = "block";
    } else {
      this.showLoginAlert = 1;
    }
  }
  closeAddReviewBox() {
    document.getElementById("reviewBox").style.display = "none";
  }
/*
  countStars(e) {
    if(e.target.classList.contains("fa-star")) {
      document.getElementById("rate").innerHTML = "";
      for(let i=0; i<(5-e.target.id); i++) {
        document.getElementById("rate").innerHTML += `<i id="`+i+1+`" class="fas fa-star gray"></i>`;
      }
      for(let i=0; i<e.target.id; i++) {
        document.getElementById("rate").innerHTML += `<i class="fas fa-star orange"></i>`;
      }
      
      for(let i=0;i<document.querySelectorAll<HTMLElement>("i.orange").length; i++) {
        document.querySelectorAll<HTMLElement>("i.orange")[i].style.color = "#83e313";
      }
      for(let i=0;i<document.querySelectorAll<HTMLElement>("i.orange").length; i++) {
        document.querySelectorAll<HTMLElement>("i.gray")[i].style.color = "#8d8d8d";
      }

    }
  }
*/
storeReview() {
  if(this.loginStatus) {
    this.http.post(GlobalConstants.apiURL+"api/reviews/store", {
      "api_pass":GlobalConstants.apiPass,
      "product_id":this.productId,
      "review":(document.getElementById("review") as HTMLTextAreaElement).value,
      "stars":(document.getElementById("rate") as HTMLTextAreaElement).value,
      "token":this.token,
    }).subscribe(data => {
      if(data["code"] == 200) {
        document.getElementById("reviewBox").style.display = "none";
        this.http.post(GlobalConstants.apiURL+"api/products/show", {
          "api_pass":GlobalConstants.apiPass,
          "productId":this.productId,
        }).subscribe(data => {
          this.product = data["product"];
        });
      }
    });
  } else {
    this.showLoginAlert = 1;
  }

  
}


  changeLoginAlert() {
    this.showLoginAlert = 0;
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
      this.showLoginAlert = 1;
    }
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


  

}
