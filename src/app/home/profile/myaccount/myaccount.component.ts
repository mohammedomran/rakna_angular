import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  token:string = "";
  user:any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    }
    this.http.post(GlobalConstants.apiURL+"api/users/show", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.user = data["user"][0];
    });
    
  }

  /*addNewMethod() {
    //document.getElementById("newPaymentMethod").style.display = "block";
    console.log(123);
  }

  deleteMethod() {
    console.log(123);
  }*/

}
