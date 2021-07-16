import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { JsonPipe } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  messages:any = [];
  adminId:any;
  userId:any;
  loginStatus:number = 0;
  showMsgAlert:number = 0;
  token:string = "";
  search_products:any = [];

  constructor(private http: HttpClient, private router: Router, public db: AngularFireDatabase) {

    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
          "api_pass":GlobalConstants.apiPass,
          "token": this.token,
      }).subscribe(data => {
        if(data["status"] == true) {
          this.loginStatus = 1;
        } else {
          this.loginStatus = 0;
        }
      });
    
  }

    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      let userId = JSON.parse(window.localStorage.getItem("user")).id;
      db.list('/').valueChanges().subscribe(data => {
        let userId = JSON.parse(window.localStorage.getItem("user"))["id"];
        for (let i = 0; i < data.length; i++) {
          if(data[i]["userData"]) {  
            if(data[i]["userData"].id == userId) {  
              if(data[i]["messages"] != null) {
                if(Object.values(data[i]["messages"])) {
                  this.messages = Object.values(data[i]["messages"]);
                }
              }
            }
          }
        }
      });
    }
  }

  ngOnInit(): void {

    if(window.localStorage.getItem("user") != "") {
      if(JSON.parse(window.localStorage.getItem("user")) != null) {
        this.userId = JSON.parse(window.localStorage.getItem("user")).id;
      }
    }

    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
          "api_pass":GlobalConstants.apiPass,
          "token": this.token,
      }).subscribe(data => {
        if(data["status"] == true) {
          this.loginStatus = 1;
        } else {
          this.loginStatus = 0;
        }
      });
    }

  }

  searchForProduct() {
    this.http.post(GlobalConstants.apiURL+"api/products/search-for-product", {
      "api_pass":GlobalConstants.apiPass,
      "data":(document.getElementById("productSearch") as HTMLTextAreaElement).value
    }).subscribe(data => {
      this.search_products = data["products"];
    });
  }


  logout() {
    this.http.post(GlobalConstants.apiURL+"api/users/logout", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
    }).subscribe(data => {
      if(data["status"] == true) {
        this.loginStatus = 0;
        window.localStorage.setItem("user", "");
        this.router.navigate(['/login']);
      }
    });
  }


  
  openChat() {
    document.querySelector(".messages-box").classList.add("d-block");
    document.querySelector(".messages-box").classList.remove("d-none");
  }
  closeChat() {
    document.querySelector(".messages-box").classList.add("d-none");
    document.querySelector(".messages-box").classList.remove("d-block");
  }

  
  startChat() {
    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
      this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
          "api_pass":GlobalConstants.apiPass,
          "token": this.token,
      }).subscribe(data => {
        if(data["status"]) {
          this.loginStatus = 1;
        }
      });
    
  }
    if(this.loginStatus) {
      if(window.localStorage.getItem("user")) {
        let userId = JSON.parse(window.localStorage.getItem("user")).id;
        this.db.object("/"+userId).update({
          status: 1,
          userData:JSON.parse(window.localStorage.getItem("user"))
        });
        document.getElementById("startChatBtn").style.display = "none";
        document.querySelector<HTMLElement>(".messages-box .content").classList.add("d-block");
        document.querySelector<HTMLElement>(".messages-box .footer").classList.add("d-flex");
        document.getElementById("endChatBtn").classList.add("d-block");
      }
    } else {
      this.showMsgAlert = 1;
    }
  }
  changeshowMsgAlert() {
    this.showMsgAlert = 0;
  }
  
  storeMsg() {
    if(this.loginStatus) {
      if(window.localStorage.getItem("user")) {
        let msgContent = (document.getElementById("msgContent") as HTMLTextAreaElement).value;
        let userId = JSON.parse(window.localStorage.getItem("user")).id;

        if(msgContent != "") {
          (document.getElementById("msgContent") as HTMLTextAreaElement).value = "";

          let date = new Date();

          this.db.list(userId+"/messages").push({
            msg: msgContent,
            date: JSON.stringify(date),
            sender: userId
          });
        }
      }
    } else {
      this.showMsgAlert = 1;
    }
  }

  endChat(id) {
    document.getElementById("endChatBtn").classList.remove("d-block");
    document.getElementById("startChatBtn").style.display = "block";
    document.querySelector<HTMLElement>(".messages-box .content").classList.remove("d-block");
    document.querySelector<HTMLElement>(".messages-box .footer").classList.remove("d-flex");
    this.db.object("/"+id).update({
      status: 0,
    });
  }



}





