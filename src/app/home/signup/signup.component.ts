import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showAlert:number = 0;
  alertMsg:string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    

  }

  signupUser() {
    this.http.post(GlobalConstants.apiURL+"api/users/signup", {
        "api_pass":GlobalConstants.apiPass,
        "first_name":(document.getElementById("first_name") as HTMLTextAreaElement).value,
        "last_name":(document.getElementById("last_name") as HTMLTextAreaElement).value,
        "mobile":(document.getElementById("mobile") as HTMLTextAreaElement).value,
        "email":(document.getElementById("email") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) {
        window.localStorage.setItem("user", JSON.stringify(data["user"]));
        this.router.navigate(['/home']);
      } else {
        this.showAlert = 1;
        this.alertMsg = data["message"];
      }
    });
  }

  
  changeshowAlert() {
    this.showAlert = 0;
  }

}
