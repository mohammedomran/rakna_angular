import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users_count: number = 0;
  users_latest:any = [];
  token:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/users/stats", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token
      }).subscribe(data => {
        this.users_count = data["stats"]["users_count"];
        this.users_latest = data["stats"]["users_latest"];
        console.log(data);
    });

  }

}
