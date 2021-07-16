import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any = [];
  categories_count:number = 0;
  token:string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/categories/index", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.categories = data["categories_data"]["categories"];
      this.categories_count = data["categories_data"]["categories_count"];
    });
  }

  
  delete(id) {
    if(confirm("هل أنت متأكد من إنك تريد حذف هذا التصنيف ؟")) {
      this.http.post(GlobalConstants.apiURL+"api/categories/delete", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      "id":id,
    }).subscribe(data => {
      this.categories = data["categories"];
    });
    }
  }

}
