import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-search-for-product',
  templateUrl: './search-for-product.component.html',
  styleUrls: ['./search-for-product.component.css']
})
export class SearchForProductComponent implements OnInit {

  //search result vars
  isSearchSuccess:boolean = false;
  isSearchFailed:boolean = false;
  products:any = [];
  x = 0;

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


}
