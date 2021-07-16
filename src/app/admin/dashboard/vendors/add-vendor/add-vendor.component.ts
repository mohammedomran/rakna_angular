import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  token: string = "";
  email:any = "";
  password:any = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addVendor() {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.email = (document.getElementById("email") as HTMLTextAreaElement).value;
    this.password = (document.getElementById("password") as HTMLTextAreaElement).value;
    this.http.post(GlobalConstants.apiURL+"api/vendors/store", {
      "api_pass":GlobalConstants.apiPass,
      "email":this.email,
      "password":this.password,
      "token":this.token
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/vendors"]);
      }
    });
  }

}
