import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {


  email:any = "";
  password:any = "";
  error:boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginadmin() {
      this.http.post(GlobalConstants.apiURL+"api/vendors/login", {
        "api_pass":GlobalConstants.apiPass,
        "email":(document.getElementById("email") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.error = false;
          window.localStorage.setItem("vendor", JSON.stringify(data["vendor"]));
          if(data["vendor"]["status"] == 1) {
            window.localStorage.setItem("vendor", JSON.stringify(data["vendor"]));
            this.router.navigate(['vendor/dashboard']);
          }
          else if(data["vendor"]["status"] == 0) {
            this.router.navigate(['vendor/setup-account']);
          }
          else if(data["vendor"]["status"] == -1) {
            this.router.navigate(['blocked']);
          }
        } else {
          this.error = true;
        }
      });
  }


  
}
