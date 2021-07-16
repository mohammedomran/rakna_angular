import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  token:string = "";
  id:number;
  address:any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    
    
    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    }
    this.http.post(GlobalConstants.apiURL+"api/addresses/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "address_id":this.id,
    }).subscribe(data => {
      this.address = data["address"];
      console.log(data);
    });
  }


  DeleteAddress() {
    this.http.post(GlobalConstants.apiURL+"api/addresses/delete", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "address_id":this.id,
    }).subscribe(data => {
      if(data["code"] == 200) { 
        this.router.navigate(['/profile/edit']);
      }
    });
  } 

  updateAddress() {
    this.http.post(GlobalConstants.apiURL+"api/addresses/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "address_id":this.id,
      "address": (document.getElementById("address") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if(data["code"] == 200) { 
        this.router.navigate(['/profile/edit']);
      }
    });
  }


}
