import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  token: string = "";
  email:any = "";
  password:any = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addAdmin() {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.email = (document.getElementById("email") as HTMLTextAreaElement).value;
    this.password = (document.getElementById("password") as HTMLTextAreaElement).value;
    this.http.post(GlobalConstants.apiURL+"api/admins/store", {
      "api_pass":GlobalConstants.apiPass,
      "email":this.email,
      "password":this.password,
      "token":this.token
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/admins"]);
      }
    });
  }

}
