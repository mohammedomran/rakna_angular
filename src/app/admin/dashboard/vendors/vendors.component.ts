import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors_count: number = 0;
  vendors_latest:any = [];
  token:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/vendors/stats", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token
      }).subscribe(data => {
        this.vendors_count = data["vendors_stats"]["vendors_count"];
        this.vendors_latest = data["vendors_stats"]["vendors_latest"];
        console.log(this.vendors_count);
        console.log(this.vendors_latest);
    });

  }


}
