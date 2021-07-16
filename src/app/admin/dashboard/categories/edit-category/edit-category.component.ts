import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  token:string = "";
  category:any = {};
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.http.post(GlobalConstants.apiURL+"api/categories/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "id":parseInt(this.route.snapshot.paramMap.get('id')),
    }).subscribe(data => {
      this.category = data["category"];
    });
  }

  update() {
    this.http.post(GlobalConstants.apiURL+"api/categories/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "name":(document.getElementById("name") as HTMLTextAreaElement).value,
      "id":parseInt(this.route.snapshot.paramMap.get('id')),
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/categories"]);
      }
    });
  }

}
