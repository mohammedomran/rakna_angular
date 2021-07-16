import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors:any = [];
  colors_count:number = 0;
  token:string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/colors/index", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.colors = data["colors_data"]["colors"];
      this.colors_count = data["colors_data"]["count"];
    });
  }

  delete(id) {
    if(confirm("هل أنت متأكد من إنك تريد حذف هذا اللون ؟")) {
      this.http.post(GlobalConstants.apiURL+"api/colors/delete", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "id":id,
      }).subscribe(data => {
        this.colors = data["colors"];
      });
    }
  }



}
