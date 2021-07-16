import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { GlobalConstants } from './../../common/global-constants';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email:any = "";
  password:any = "";
  error:boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginadmin() {
      this.http.post(GlobalConstants.apiURL+"api/admins/login", {
        "api_pass":GlobalConstants.apiPass,
        "email":(document.getElementById("email") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.error = false;
          window.localStorage.setItem("admin", JSON.stringify(data["admin"]));
          if(data["admin"]["status"] == 1) {
            window.localStorage.setItem("admin", JSON.stringify(data["admin"]));
            this.router.navigate(['/dashboard/stats']);
          }
          else if(data["admin"]["status"] == 0) {
            this.router.navigate(['/setup-account']);
          }
          else if(data["admin"]["status"] == -1) {
            this.router.navigate(['/blocked']);
          }
        } else {
          this.error = true;
        }
      });
  }


  


}
