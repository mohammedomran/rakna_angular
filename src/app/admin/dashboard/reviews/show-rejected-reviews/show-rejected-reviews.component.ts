import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-rejected-reviews',
  templateUrl: './show-rejected-reviews.component.html',
  styleUrls: ['./show-rejected-reviews.component.css']
})
export class ShowRejectedReviewsComponent implements OnInit {

  token:string = "";
  reviews:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/reviews/cancelled", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.reviews = data["reviews"];
        }
      });
  }

  returnArray(e) {
    return new Array(e);
  }
  
  update(id, status, e) {
    this.http.post(GlobalConstants.apiURL+"api/reviews/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "id":id,
      "status":status,
    }).subscribe(data => {
      if(data["code"]==200) {
        e.target.parentElement.parentElement.remove();
      }
    });
  }

  
}
