import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  latest_products:any = [];
  offers_count:number = 0;

  //token
  token:string = JSON.parse(window.localStorage.getItem("admin")).token;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.post(GlobalConstants.apiURL+"api/products/get_offers_stats", {
      "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
      "token": this.token,
    }).subscribe(data => {
      this.latest_products = data["offers"]["all_offers"].slice(0, 3);
      this.offers_count = data["offers"]["count"];
    });


  }


}
