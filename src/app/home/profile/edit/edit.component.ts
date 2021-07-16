import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  token:string = "";
  user:any = {};
  addresses:any = [];
  showWishlistAlert:number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
    if(window.localStorage.getItem("user") != "" && window.localStorage.getItem("user") != null) {
      this.token = JSON.parse(window.localStorage.getItem("user")).token;
    }
    this.http.post(GlobalConstants.apiURL+"api/users/show", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
    }).subscribe(data => {
      this.user = data["user"][0];
      this.addresses = data["user"][0].addresses;
    });
  }

  updateUserData() {
    this.token = JSON.parse(window.localStorage.getItem("user")).token;
    this.http.post(GlobalConstants.apiURL+"api/users/update", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      "first_name":(document.getElementById("first_name") as HTMLTextAreaElement).value,
      "last_name":(document.getElementById("last_name") as HTMLTextAreaElement).value,
      "mobile":(document.getElementById("mobile") as HTMLTextAreaElement).value,
      "email":(document.getElementById("email") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      this.user = data["user"];
      this.addresses = data["user"].addresses;
      this.showWishlistAlert = 1;
    });
  }

  manageAddresses(e) {
    if(e.target.id == "addAddress") {
      //show new address add input field
      document.getElementById("newAddressBox").style.display = "block";
      document.getElementById("addAddress").style.display = "none";
      document.getElementById("newAddressBox").innerHTML += `
        <input class="newAddress form-control mb-2" type="text" id="newAddress" value="">                
        <button id="storeAddress" class="form-control w-25 btn-primary">حفظ العنوان الجديد</button>
      `;
    } else if(e.target.id == "storeAddress") {
      //store new address
      this.http.post(GlobalConstants.apiURL+"api/addresses/store", {
        "api_pass":GlobalConstants.apiPass,
        "token":this.token,
        "address":(document.getElementById("newAddress") as HTMLTextAreaElement).value,
      }).subscribe(data => {
        if(data["code"] == 200) {
          document.getElementById("newAddressBox").style.display = "none";
          document.getElementById("addAddress").style.display = "block";
          
          let x = document.getElementById("all_addresses");
          x.insertAdjacentHTML('beforeend', 
          `<div class="row mb-1">
            <div class="col-12">
                <div class="row">
                    <input  id="{{address.id}}" class="form-control mb-1" type="text" value="`+data["address"].address+`">
                    <i id="`+data["address"].id+`" class="bg-success text-white p-2 rounded fas fa-edit" style="cursor: pointer;" routerLink="/profile/address/`+data["address"].id+`"></i>
                </div>
            </div>

          </div>`
          );
          document.getElementById("newAddressBox").innerHTML = "";
        }
      });
  } else if(e.target.classList.contains("fa-edit")) {
    this.router.navigate(['/profile/address/'+e.target.id]);
  }
}
changeshowWishlistAlert() {
  this.showWishlistAlert = 0;
}

}
