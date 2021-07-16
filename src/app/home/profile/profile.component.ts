import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public myaccount: string;
  public edit: string;
  public orders: string;
  public paymentMethod: string;
  public sendSuggestion: string;

  constructor(private route: Router, private http: HttpClient) { }
  user:any = {};
  token:string = "";
  main_image:any = "";

  ngOnInit(): void {
    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    } else {
      this.route.navigate(['/login']);
    }
    this.http.post(GlobalConstants.apiURL+"api/users/check_login_status", {
        "api_pass":GlobalConstants.apiPass,
        "token": this.token,
    }).subscribe(data => {
      if(data["status"] == false) {
        this.route.navigate(['/login']);
      } else {
        this.http.post(GlobalConstants.apiURL+"api/users/show", {
          "api_pass":GlobalConstants.apiPass,
          "token":this.token,
        }).subscribe(data => {
          this.user = data["user"][0];
        });
      }
    });
    
    
  }

  
  onNavigate(e) {
    if(this.route.url.split('/')[2] == "myaccount" || this.route.url.split('/')[2] == "edit" || this.route.url.split('/')[2] == "orders" || this.route.url.split('/')[2] == "payment-methods" || this.route.url.split('/')[2] == "send-suggestions") {
      
      let elements = document.querySelector("."+this.route.url.split('/')[2]).parentElement.children;
      for(let i=0; i< elements.length; i++) {
        elements[i].classList.remove("bg-red");
      }

      document.querySelector("."+this.route.url.split('/')[2]).classList.add("bg-red");

    }
  }

  viewProfilePicInput() {
    document.querySelector<HTMLElement>(".change-pic").style.display="block";
  }
  hideProfilePicInput() {
    document.querySelector<HTMLElement>(".change-pic").style.display="none";
  }

  previewImage() {
    document.querySelector<HTMLElement>(".profile-pic").style.backgroundImage = 'url('+URL.createObjectURL((<HTMLInputElement>document.getElementById("profilePicture")).files[0])+')';
    document.querySelector<HTMLElement>(".changeBtn").style.display="block";
  }

  image(e) {
    this.main_image = e.target.files[0].base64;

    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
        window.localStorage.setItem('file', JSON.stringify(reader.result)); 
    };
    this.uploadPic();
  }

  uploadPic() {
    this.http.post(GlobalConstants.apiURL+"api/users/update_profile_picture", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "file":window.localStorage.getItem("file")
    }).subscribe(data => {
      this.user = data["user"][0];
    });
  }


  


}
