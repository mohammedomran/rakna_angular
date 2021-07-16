import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  x:number = 0;
  products:any = [];
  token:string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/products/index", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        this.products = data["products"];
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

    delete(id) {
      if(confirm("هل أنت متأكد من إنك تريد حذف هذا المنتج ؟")) {

        this.http.post(GlobalConstants.apiURL+"api/products/delete", {
          "api_pass":GlobalConstants.apiPass,
          "token":this.token,
          "id":id
        }).subscribe(data => {
          this.products = data["products"];
        });
      } 
    }
}
