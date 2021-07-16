import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  token: string = "";
  admins:any = [];
  admins_count:number = 0;
  adminId:number;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.adminId = JSON.parse(window.localStorage.getItem("admin")).id
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/admins/index", {
      "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
      token:this.token
    }).subscribe(data => {
      this.admins = data["admins_stats"].admins;
      this.admins_count = data["admins_stats"].count;
    });

  }

  
  delete(id) {
    if(confirm("هل أنت متأكد من إنك تريد حذف هذا المدير ؟")) {
      this.http.post(GlobalConstants.apiURL+"api/admins/delete", {
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "token":this.token,
        "id":id,
      }).subscribe(data => {
        this.admins = data["admins"];
      });
    }
  }

}
