import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-setup-account',
  templateUrl: './setup-account.component.html',
  styleUrls: ['./setup-account.component.css']
})
export class SetupAccountComponent implements OnInit {

  isError:boolean = false;
  error:string = "الرجاء إدخال جميع البيانات";
  token:string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  saveChanges() {
    
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/admins/update", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "first_name":(document.getElementById("first_name") as HTMLTextAreaElement).value,
        "last_name":(document.getElementById("last_name") as HTMLTextAreaElement).value,
        "mobile":(document.getElementById("mobile") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) {
        //console.log(data);
        this.router.navigate(['/dashboard/stats']);
      } else {
        /*console.log(data);
        this.isError = true;
        setTimeout(function() {
          this.isError = false;
        }, 2000);*/
      }
    });
  }


}
