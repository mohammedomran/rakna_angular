import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  x:number = 0;
  latest_products:any = [];
  products_count:number = 0;
  token:string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

      this.token = JSON.parse(window.localStorage.getItem("admin")).token;
      this.http.post(GlobalConstants.apiURL+"api/products/stats", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        this.latest_products = data["products_stats"]["latest_products"].slice(0, 3);
        this.products_count = data["products_stats"]["count"];
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

}
