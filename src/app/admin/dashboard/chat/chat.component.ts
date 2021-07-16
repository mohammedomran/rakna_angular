import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats:any = [];
  messages:any = [];
  currentUserChat:number;
  currentUser:any = {};
  currentUserStatus:number = 0;

  constructor(private route: Router, public db: AngularFireDatabase) { 

    db.list('/').valueChanges().subscribe(data => {
      this.chats = data;
      this.chatClicked(this.route.url.split('/')[3]);
    });

  }

  ngOnInit(): void {
  }

  chatClicked(id) {    
    this.currentUserChat = id;
    for (let i = 0; i < this.chats.length; i++) {
      if(this.chats[i].userData) {
        if(this.chats[i].userData.id == id) {
          this.currentUserStatus = this.chats[i].status;
          this.currentUser = this.chats[i].userData;
          if(this.chats[i].messages) {
            this.messages = Object.values(this.chats[i].messages);
          } else {
            this.messages = [];
          }
        }
      }
    }
  }

  storeMsg() {
    let msgContent = (document.getElementById("msgContent123") as HTMLTextAreaElement).value;
    let adminId = JSON.parse(window.localStorage.getItem("admin")).id;
    
      let date = new Date();

      this.db.list(this.currentUserChat+"/messages").push({
        msg: msgContent,
        date: JSON.stringify(date),
        sender: adminId
      });
      (document.getElementById("msgContent123") as HTMLInputElement).value = "";

    
  }

  


  
  



}
