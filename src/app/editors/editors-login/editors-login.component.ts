import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"

@Component({
  selector: 'app-editors-login',
  templateUrl: './editors-login.component.html',
  styleUrls: ['./editors-login.component.css']
})
export class EditorsLoginComponent implements OnInit {

  error:boolean;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginEditor() {
    this.http.post("http://localhost:8000/api/admins/login", {
      "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
      "email":(document.getElementById("email") as HTMLTextAreaElement).value,
      "password":(document.getElementById("password") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) {
        window.localStorage.setItem("admin", JSON.stringify(data["admin"]));
        this.router.navigate(['/dashboard/stats']);
        this.error = false;
      } else {
        this.error = true;
      } 
    });
  }


}
