import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {Router} from "@angular/router";
import { GlobalConstants } from './../../../../common/global-constants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  token:string = "";
  name:any = "";
  category:any;
  categories:any = [];
  colors:any = [];
  selected_colors:any = [];
  description:any = "";
  price:any = "";
  price_discount:any = "";
  percentage_discount:any = "";
  main_image:any = "";
  files:any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    //get all categories & colors and show them in view
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;

    this.http.post(GlobalConstants.apiURL+"api/categories/index", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.categories = data["categories_data"].categories;
    });

    this.http.post(GlobalConstants.apiURL+"api/colors/index", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.colors = data["colors_data"].colors;
    });
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
  }
  
  upload(event){
    /*const fileList: FileList = event.target.files;
    for (let x = 0; x < fileList.length; x++) {
      this.files.push(fileList[x]);
    }
    console.log(this.files)*/
    let image_upload = new FormData();
            let TotalImages = (<HTMLInputElement>document.getElementById('image-upload')).files.length; //Total Images
            let images = (<HTMLInputElement>document.getElementById('image-upload'));
            for (let i = 0; i < TotalImages; i++) {                
                const reader = new FileReader();
                reader.readAsDataURL(images.files[i]);
                
                reader.onload = () => {
                  let x  = reader.result;

                    //localStorage.setItem("files", JSON.stringify(x));
                    this.storeFiles(x)
                };
            }
  }
  storeFiles(e) {
    this.files.push(e);
  }

  addProduct() {
    /*document.querySelector(".big").classList.add("d-block");
    document.querySelector(".popup").classList.add("d-block");
    setTimeout(function() {
      document.querySelector(".spinner-border").classList.add("d-none");
      document.querySelector(".check").classList.add("d-block");
      document.querySelector(".notificationBtn").classList.add("d-block");
      document.querySelector(".popup h4").innerHTML = "تم رفع المنتج";
    }, 2000);*/
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.name = (document.getElementById("name") as HTMLTextAreaElement).value;
    this.category = (document.getElementById("category") as HTMLTextAreaElement).value;
    this.description = (document.getElementById("description") as HTMLTextAreaElement).value;
    this.price = (document.getElementById("price") as HTMLTextAreaElement).value;
    this.price_discount = (document.getElementById("price_discount") as HTMLTextAreaElement).value;
    this.percentage_discount = (document.getElementById("percentage_discount") as HTMLTextAreaElement).value;
    this.http.post(GlobalConstants.apiURL+"api/products/store", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
      
      "name":this.name,
      "category_id":this.category,
      "selected_colors":this.selected_colors,
      "description":this.description,
      "price":this.price,
      "price_discount":this.price_discount,
      "percentage_discount":this.percentage_discount,
      "file":window.localStorage.getItem("file"),
      "files":this.files
    }).subscribe(data => {
      if(data["code"]==200) {
        this.router.navigate(["/dashboard/products"]);
      }
    });

  }

  removePopup() {
    document.querySelector(".big").classList.remove("d-block");
    document.querySelector(".popup").classList.remove("d-block");
  }


  updateColor(e) {
    if(e.target.nodeName == "I") {
      if(this.selected_colors.indexOf(e.target.id) == -1) {
        this.selected_colors.push(e.target.id);
        e.target.classList.add("fa-check-square");
        e.target.classList.remove("fa-square");
      } else {
        this.selected_colors.splice(this.selected_colors.indexOf(e.target.id), 1);
        e.target.classList.add("fa-square");
        e.target.classList.remove("fa-check-square");
      }
      console.log(this.selected_colors)
    }
  }

}
