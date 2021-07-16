import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrls: ['./edit-color.component.css']
})
export class EditColorComponent implements OnInit {

  token:string = "";
  color:any = {};
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.http.post(GlobalConstants.apiURL+"api/colors/show", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "id":parseInt(this.route.snapshot.paramMap.get('id')),
    }).subscribe(data => {
      this.color = data["color"];
    });

  }

  
  update() {
    this.http.post(GlobalConstants.apiURL+"api/colors/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "color":(document.getElementById("color") as HTMLTextAreaElement).value,
      "code":(document.getElementById("code") as HTMLTextAreaElement).value,
      "id":parseInt(this.route.snapshot.paramMap.get('id')),
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/colors"]);
      }
    });
  }


}
