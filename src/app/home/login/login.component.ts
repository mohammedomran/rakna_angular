import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router"
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string = "";
  showAlert:number = 0;
  alertMsg:string = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {   

  }

  loginUser() {
    this.http.post(GlobalConstants.apiURL+"api/users/login", {
      "api_pass":GlobalConstants.apiPass,
      "email":(document.getElementById("email") as HTMLTextAreaElement).value,
        "password":(document.getElementById("password") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if( data["code"] == 200) {
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
