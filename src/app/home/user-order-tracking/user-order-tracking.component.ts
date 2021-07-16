import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../common/global-constants';

@Component({
  selector: 'app-user-order-tracking',
  templateUrl: './user-order-tracking.component.html',
  styleUrls: ['./user-order-tracking.component.css']
})
export class UserOrderTrackingComponent implements OnInit {

  isStatusGotten:number = 0;
  order_status:number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getOrderStatus() {
    this.http.post(GlobalConstants.apiURL+"api/orders/track", {
      "api_pass":GlobalConstants.apiPass,
      "order_id":(document.getElementById("order_id") as HTMLTextAreaElement).value,
    }).subscribe(data => {
      if( data["code"] == 200) {
          this.isStatusGotten = 1;
          data["order_status"] !=null ? this.order_status = data["order_status"]["status"] : this.order_status=404;
      }
    });
  }

}
