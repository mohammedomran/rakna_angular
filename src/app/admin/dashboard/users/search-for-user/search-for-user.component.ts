import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-search-for-user',
  templateUrl: './search-for-user.component.html',
  styleUrls: ['./search-for-user.component.css']
})
export class SearchForUserComponent implements OnInit {

  //search result vars
  isSearchSuccess:boolean = false;
  isSearchFailed:boolean = false;
  users:any = [];

  //token
  token:string = JSON.parse(window.localStorage.getItem("admin")).token;

  //userdata that is send to the API
  userData:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchUsers() {
    this.userData = (document.getElementById("userData") as HTMLTextAreaElement).value;
    
    this.http.post(GlobalConstants.apiURL+"api/users/search", {
      "api_pass":GlobalConstants.apiPass,
      "token": this.token,
      "id": this.userData,
      "first_name": this.userData,
      "last_name": this.userData,
    }).subscribe(data => {

      if(data["users"].length > 0) {
        this.users = data["users"];
        this.isSearchSuccess = true;
        this.isSearchFailed = false;
      } else {
        this.isSearchFailed = true;
        this.isSearchSuccess = false;
      }

    });

  }

}
