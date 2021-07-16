import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  isSearchSuccess:boolean = false;
  isSearchFailed:boolean = false;
  products:any = [];

  price_discount:number = 0;
  percentage_discount:number = 0;
  product_id:number;

  //token
  token:string = JSON.parse(window.localStorage.getItem("admin")).token;

  //userdata that is send to the API
  productData:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchProducts() {
    this.productData = (document.getElementById("productData") as HTMLTextAreaElement).value;
    
    this.http.post(GlobalConstants.apiURL+"api/products/search", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
      "data": this.productData
    }).subscribe(data => {
      this.products = data["products"].slice(0, 5);
      if(this.products.length > 0) {
        this.isSearchSuccess = true;
      } else {
        this.isSearchSuccess = false;
      }
    });

  }

  selectProduct(e) {
    (document.getElementById("productData") as HTMLTextAreaElement).value = e.target.id;
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].id == e.target.id) {
        (document.getElementById("price_discount") as HTMLTextAreaElement).value = this.products[i].price_discount;
        (document.getElementById("percentage_discount") as HTMLTextAreaElement).value = this.products[i].percentage_discount;
        this.product_id = e.target.id;
      }
    }
  }

  storeOrder() {
    this.price_discount = parseInt((document.getElementById("price_discount") as HTMLTextAreaElement).value);
    this.percentage_discount = parseInt((document.getElementById("percentage_discount") as HTMLTextAreaElement).value);
    this.http.post(GlobalConstants.apiURL+"api/products/update", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
      "data": this.productData,
      "product_id": this.product_id,
      "price_discount": this.price_discount,
      "percentage_discount": this.percentage_discount,
    }).subscribe(data => {
      console.log(data);
    });
  }


}
