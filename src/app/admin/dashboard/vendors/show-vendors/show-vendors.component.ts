import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-show-vendors',
  templateUrl: './show-vendors.component.html',
  styleUrls: ['./show-vendors.component.css']
})
export class ShowVendorsComponent implements OnInit {

  token: string = "";
  vendors:any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/vendors/index", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token
      }).subscribe(data => {
        this.vendors = data["vendors"];
    });

  }

  
  delete(id) {
    if(confirm("هل أنت متأكد من إنك تريد حذف هذا التاجر ؟")) {
      this.http.post(GlobalConstants.apiURL+"api/vendors/delete", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "id":id,
      }).subscribe(data => {
        this.vendors = data["vendors"];
      });
    }
  }


}
