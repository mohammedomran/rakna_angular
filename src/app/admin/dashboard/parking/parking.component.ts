import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  adminData:any = {};
  token:string = "";
  loginStatus:number = 0;
  sensors:any = [];
  ngOnInit(): void {
    setInterval(()=>{
      
      
    this.http.get(GlobalConstants.apiURL+"api/sensors/index", {
    }).subscribe(data => {
      this.sensors = data["sensors"];
    });

    }, 1500)
  }

}
