import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-send-suggestions',
  templateUrl: './send-suggestions.component.html',
  styleUrls: ['./send-suggestions.component.css']
})
export class SendSuggestionsComponent implements OnInit {

  token:string = "";
  user:any = {};
  orders:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post(GlobalConstants.apiURL+"api/users/orders", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.orders = data["orders"];
    });
  }

  storeComplaint() {
    this.http.post(GlobalConstants.apiURL+"api/complaints/store", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "order_id":(document.getElementById("order_id") as HTMLTextAreaElement).value,
      "content":(document.getElementById("complaint-content") as HTMLTextAreaElement).value
    }).subscribe(data => {
      console.log(data);
    });
  }

}
