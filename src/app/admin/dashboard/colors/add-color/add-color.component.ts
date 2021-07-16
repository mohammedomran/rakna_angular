import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  token:string = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  addColor() {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.http.post(GlobalConstants.apiURL+"api/colors/store", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "color":(document.getElementById("color") as HTMLTextAreaElement).value,
      "code":(document.getElementById("code") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/colors"]);
      }
    });
  }
}
