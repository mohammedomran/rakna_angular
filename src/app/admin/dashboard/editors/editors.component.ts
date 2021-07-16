import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements OnInit {

  token: string = "";
  editors:any = [];
  editors_count:number = 0;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/editors/index", {
      "api_pass":GlobalConstants.apiPass,
      token:this.token
    }).subscribe(data => {
      this.editors = data["editors_stats"].editors;
      this.editors_count = data["editors_stats"].count;
    });

  }

  
  delete(id) {
    if(confirm("هل أنت متأكد من إنك تريد حذف هذا المحرر ؟")) {
      this.http.post(GlobalConstants.apiURL+"api/editors/delete", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "id":id,
      }).subscribe(data => {
        this.editors = data["editors"];
      });
    }
  }

}
