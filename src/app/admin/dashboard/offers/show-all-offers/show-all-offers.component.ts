import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-all-offers',
  templateUrl: './show-all-offers.component.html',
  styleUrls: ['./show-all-offers.component.css']
})
export class ShowAllOffersComponent implements OnInit {

  products:any = [];

  //token
  token:string = JSON.parse(window.localStorage.getItem("admin")).token;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.post(GlobalConstants.apiURL+"api/products/offers", {
      "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
      "token": this.token,
    }).subscribe(data => {
      console.log(data)
      this.products = data["offers"];
    });


  }


}
