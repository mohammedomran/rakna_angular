import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-not-revised-complaints',
  templateUrl: './not-revised-complaints.component.html',
  styleUrls: ['./not-revised-complaints.component.css']
})
export class NotRevisedComplaintsComponent implements OnInit {


  token:string = "";
  complaints:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/complaints/not_revised", {
      "api_pass":GlobalConstants.apiPass,
        "token":this.token,
      }).subscribe(data => {
        if(data["code"] == 200) {
          this.complaints = data["complaints"];
        }
      });
  }

  
  update(status, id, e) {
    this.http.post(GlobalConstants.apiURL+"api/complaints/change", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "status":status,
      "id":id,
    }).subscribe(data => {
      if(data["code"]==200) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    });
  }

}
