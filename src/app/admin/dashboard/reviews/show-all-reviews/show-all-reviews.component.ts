import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-all-reviews',
  templateUrl: './show-all-reviews.component.html',
  styleUrls: ['./show-all-reviews.component.css']
})
export class ShowAllReviewsComponent implements OnInit {

  token:string = "";
  reviews:any = [];
  x:number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/reviews/index", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.reviews = data["reviews"];
        }
      });
  }

  getAvg(e) {
    this.x = 0;
    for(var i=0; i<e.length; i++) {
      this.x = this.x + parseInt(e[i].stars);
    }
    if(e.length > 0) {
      return new Array(this.x/e.length);
    } else {
      return new Array(0);
    }
  }
  returnArray(e) {
    return new Array(e);
  }

  
  update(id, status, e) {
    this.http.post(GlobalConstants.apiURL+"api/reviews/change", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "id":id,
      "status":status,
    }).subscribe(data => {
      if(data["code"]==200) {
        this.reviews = data["reviews"];
      }
    });
  }


}
