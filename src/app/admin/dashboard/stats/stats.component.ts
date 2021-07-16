import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  
  x:any = [];
  stats:any = {};
  categories:any = [];
  token:string = "";
  users_filter:any = [];
  complaints_filter:any = [];
  orders_filter:any = [];
  reviews_filter:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    
    this.token = JSON.parse(window.localStorage.getItem("admin")).token;
    this.http.post(GlobalConstants.apiURL+"api/stats/index", {
      "api_pass":GlobalConstants.apiPass,
      "token":this.token,
    }).subscribe(data => {
      this.stats = data["stats"];

      for (let i = 0; i < this.stats["users_filter"].length; i++) {
        this.users_filter.push(this.stats["users_filter"][i].year + "-" + this.stats["users_filter"].month);
      }
      for (let i = 0; i < this.stats["complaints_filter"].length; i++) {
        this.complaints_filter.push(this.stats["complaints_filter"][i].year + "-" + this.stats["complaints_filter"].month);
      }
      for (let i = 0; i < this.stats["orders_filter"].length; i++) {
        this.orders_filter.push(this.stats["orders_filter"][i].year + "-" + this.stats["orders_filter"].month);
      }
      for (let i = 0; i < this.stats["reviews_filter"].length; i++) {
        this.reviews_filter.push(this.stats["reviews_filter"][i].year + "-" + this.stats["reviews_filter"].month);
      }
    });
    
/*
    var chart = new Chart("users", {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: [
          "يناير",
          "فبراير",
          "مارس",
          "إبريل",
        ],
          datasets: [{
              label: 'عدد المستخدمين شهريا',
              backgroundColor: '#34495e',
              borderColor: '#1c78d4',
              data: [250, 340, 525, 615, 790, 1145]
          }]
      },

      // Configuration options go here
      options: {
      }
    });


    var chart = new Chart("categories", {
      type: 'doughnut',
      data: {
        labels: ["سراير", "مكاتب", "كراسي", "كنب", ],
        datasets: [{
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [55, 29, 125, 77]
        }]
      },
      options: {
      }
    });

    var chart = new Chart("orders", {
      type: 'line',
      data: {
        labels: [
          "يناير",
          "فبراير",
          "مارس",
          "إبريل",
        ],
        datasets: [{
          label: "عدد الطلبات شهريا",
          borderColor: "#3e95cd",
          data: [55, 29, 125, 77],
          fill: false
        }]
      },
      options: {
      }
    });

    var chart = new Chart("complaints", {
      type: 'horizontalBar',
      data: {
        labels: [
          "يناير",
          "فبراير",
          "مارس",
          "إبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر"
        ],
        datasets: [{
          label: "عدد الشكاوي شهريا",
          backgroundColor: "#3e95cd",
          data: [55, 29, 125, 77, 55, 43, 39, 55, 22, 13, 29, 40],
          fill: false
        }]
      },
      options: {
      }
    });*/
    
  }

}
