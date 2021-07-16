import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router"
import { WINDOW } from 'ngx-owl-carousel-o/lib/services/window-ref.service';
import { GlobalConstants } from './../../common/global-constants';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  loginStatus:number = 0;
  showCompleteOrderAlert:number = 0;

  token:string = "";
  products:any = [];
  productsCount:number = 0;
  selected_products:any = [0];
  alertData:string = "";
  x:any = [];
  total_price:number = 0;
  delivery:number = 0;
  taxes:number = 0;
  user:any = {};
  AddressAlert:number = 0;
  addresses:any = [];
  addressId=null;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {



    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    }

    


    this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
    }).subscribe(data => {
      if(data["status"] == true) {
        this.loginStatus = 1;
        this.http.post(GlobalConstants.apiURL+"api/users/show", {
          "api_pass":GlobalConstants.apiPass,
          "token":this.token,
        }).subscribe(data => {
          this.user = data["user"][0];
          this.addresses.push(...this.user.addresses)
          console.log(this.addresses)
        });
      }
    });

    this.selected_products = JSON.parse(window.localStorage.getItem("selected_products"))?JSON.parse(window.localStorage.getItem("selected_products")):[];
    this.http.post(GlobalConstants.apiURL+"api/products/return_products", {
        "api_pass":GlobalConstants.apiPass,
        'products': this.selected_products,
    }).subscribe(data => {
      
      //store selected products in localstorage
      if(window.localStorage.getItem("cart-items") == null) {
        for (let i = 0; i < data["products"].length; i++) {
          this.x.push({
            "id":data["products"][i].id,
            "name":data["products"][i].name,
            "main_image":data["products"][i].main_image,
            "price":data["products"][i].price,
            "colors":data["products"][i].colors,
            "selected_color":data["products"][i].colors[0],
            "quantity":1,
          });
        }
        window.localStorage.setItem("cart-items", JSON.stringify(this.x));
        this.x = [];
        console.log(JSON.parse(window.localStorage.getItem("cart-items")))

      } else {

        this.x = JSON.parse(window.localStorage.getItem("cart-items"));
        let cartItems = [];
        for(let j=0; j<this.x.length; j++) {
          cartItems.push(this.x[j].id);
        }
        for (let i = 0; i < data["products"].length; i++) {
          if(cartItems.indexOf(data["products"][i].id) == -1) {
            this.x.push({
              "id":data["products"][i].id,
              "name":data["products"][i].name,
              "main_image":data["products"][i].main_image,
              "price":data["products"][i].price,
              "price_discount":data["products"][i].price_discount,
              "percentage_discount":data["products"][i].percentage_discount,
              "colors":data["products"][i].colors,
              "selected_color":data["products"][i].colors[0],
              "quantity":1,
            });
          }
        }

        window.localStorage.setItem("cart-items", JSON.stringify(this.x));
        this.x = []; 
       
      }
      this.products = JSON.parse(window.localStorage.getItem("cart-items"));
      
      this.productsCount = this.products.length;
      //count tot price
      this.total_price = 0;
      let y = JSON.parse(window.localStorage.getItem("cart-items"));
      for(let i=0; i<y.length; i++) {
        if(y[i].price_discount) {
          this.total_price += y[i].quantity*(y[i].price-y[i].price_discount);
        } else if(y[i].percentage_discount) {
          this.total_price += y[i].quantity*(y[i].price-y[i].price*y[i].percentage_discount/100);
        } else {
          this.total_price += y[i].quantity*y[i].price;
        }
      }
      /*this.products = JSON.parse(window.localStorage.getItem("cart-items"));

      let cartItems = JSON.parse(window.localStorage.getItem("cart-items"));
      for (let index = 0; index < cartItems.length; index++) {
        this.total_price += cartItems[index].price*cartItems[index].quantity;
      }*/
    });

    

  }

  duplicate(id) {
    let products = this.products;
    for (let i = 0; i < products.length; i++) {
      if(products[i].id == id) {
        products.splice(i, 0, products[i]);    
        window.localStorage.setItem("cart-items", JSON.stringify(products));
        break;
      }
    }
  }

  /*completeOrder() {
    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post("http://localhost:8000/api/orders/store", {
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "token":this.token,
        "products":JSON.parse(window.localStorage.getItem("cart-items")),
    }).subscribe(data => {
    });
  }*/


  deleteProduct(e) {
    //delete product from dom
    e.target.parentElement.parentElement.remove();
    
    //delete product from cart
    let id = parseInt(e.target.id);
    let stored_products = [];
    stored_products = JSON.parse(window.localStorage.getItem("cart-items"));
    
    for(let i=0; i<stored_products.length; i++) {
      if(stored_products[i].id == id) {
        stored_products.splice(stored_products.indexOf(stored_products[i]), 1);
        break;
      }
    }
    window.localStorage.setItem("cart-items", JSON.stringify(stored_products));
    
    id = null;
    stored_products = [];

    //delete product from selected products
    let selectedInStorage = JSON.parse(window.localStorage.getItem("selected_products"));
    selectedInStorage.splice(selectedInStorage.indexOf(id), 1);
    window.localStorage.setItem("selected_products", JSON.stringify(selectedInStorage));
    this.productsCount -=1; 
    //count tot price
    this.total_price = 0;
    let y = JSON.parse(window.localStorage.getItem("cart-items"));
    for(let i=0; i<y.length; i++) {
      if(y[i].price_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price_discount);
      } else if(y[i].percentage_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price*y[i].percentage_discount/100);
      } else {
        this.total_price += y[i].quantity*y[i].price;
      }    
    }

  }

  minus(e, id, price) {
    let quantity = parseInt(e.target.previousElementSibling.innerText);
    if(quantity > 1) {
      e.target.previousElementSibling.innerText = quantity - 1;

      //update view price
      e.target.parentElement.parentElement.nextElementSibling.childNodes[0].innerHTML = price*parseInt(e.target.previousElementSibling.innerText) + " ج";

      
      let x = JSON.parse(window.localStorage.getItem("cart-items"));
      for (let i = 0; i < x.length; i++) {
        if(x[i].id == id) {
          x[i].quantity -= 1;
        } 
      }
      window.localStorage.setItem("cart-items", JSON.stringify(x));
    }
    
    //count tot price
    this.total_price = 0;
    let y = JSON.parse(window.localStorage.getItem("cart-items"));
    for(let i=0; i<y.length; i++) {
      if(y[i].price_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price_discount);
      } else if(y[i].percentage_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price*y[i].percentage_discount/100);
      } else {
        this.total_price += y[i].quantity*y[i].price;
      }
    }
  }

  plus(e, id, price) {
    let quantity = parseInt(e.target.nextElementSibling.innerText);
    if(quantity < 10) {
      e.target.nextElementSibling.innerText = quantity + 1;
      e.target.parentElement.parentElement.nextElementSibling.childNodes[0].innerText = price*parseInt(e.target.nextElementSibling.innerText) + " ج";
      
      
      let x = JSON.parse(window.localStorage.getItem("cart-items"));
      for (let i = 0; i < x.length; i++) {
        if(x[i].id == id) {
          x[i].quantity += 1;
        }
      }
      window.localStorage.setItem("cart-items", JSON.stringify(x));
    }   
    
    //count tot price
    this.total_price = 0;
    let y = JSON.parse(window.localStorage.getItem("cart-items"));
    for(let i=0; i<y.length; i++) {
      if(y[i].price_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price_discount);
      } else if(y[i].percentage_discount) {
        this.total_price += y[i].quantity*(y[i].price-y[i].price*y[i].percentage_discount/100);
      } else {
        this.total_price += y[i].quantity*y[i].price;
      }
    } 
  }

  changeSelectedAddress(e) {
    this.addressId = e.target.value;
  }
  completeOrder() {

    if(this.loginStatus) {
      console.log(this.addressId)
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/orders/pay", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "products":JSON.parse(window.localStorage.getItem("cart-items")),
        "address":this.addressId ? this.addressId : this.addresses[0].id
      }).subscribe(data => {
        if(data["code"] == 200) {
          //window.location.href = data["response"]["redirection_url"];
          window.location.href = data["payment_link"];

        } else {
          this.alertData = data["message"]
          this.showCompleteOrderAlert=1;
        }
      });
    } else {
      this.alertData = "يرجي تسجيل الدخول لحسابك لتتمكن من شراء منتجاتنا";
      this.showCompleteOrderAlert = 1;
    }
  }

  showProductColors(id) {
    document.getElementById("productColors"+id).classList.toggle("d-flex");
  }

  changeProductColor(productId, color) {
    
    let cartItems = JSON.parse(window.localStorage.getItem("cart-items"));
    for (let i = 0; i < cartItems.length; i++) {
      if(cartItems[i].id == productId) {
        cartItems[i].selected_color = color;
        window.localStorage.setItem("cart-items", JSON.stringify(cartItems));
        this.products = cartItems;
        cartItems = [];
      }
    }
  }

  changeCompleteOrderAlert() {
    this.showCompleteOrderAlert = 0;
  }

  changeAddressAlert() {
    this.AddressAlert = 0;
  }
  showAddressAlert() {
    if(this.loginStatus) {
      this.AddressAlert = 1;
    } else {
      this.alertData = "يرجي تسجيل الدخول لحسابك لتتمكن من إضافة عنوانك";
      this.showCompleteOrderAlert = 1;
    }
  }

  storeAddress() {
    this.http.post(GlobalConstants.apiURL+"api/addresses/store", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "address":(document.getElementById("newAddress") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) {
        this.AddressAlert = 0;
        this.addresses.push(data["address"])
        this.addressId = data["address"]["id"];
      }
    });
  }

}
