import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  name:any = "";
  token:string = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addCategory() {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.name = (document.getElementById("name") as HTMLTextAreaElement).value;
    this.http.post(GlobalConstants.apiURL+"api/categories/store", {
      "api_pass":GlobalConstants.apiPass,
      "name":this.name,
      "token":this.token,
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/categories"]);
      }
    });
  }



}
