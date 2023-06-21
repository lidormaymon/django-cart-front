import { Component } from '@angular/core';
import { OrdersService } from 'src/app/servers/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  cart:any[]=[]

  constructor( private orderService:OrdersService) {
    this.loadOrders()
  }



  loadOrders() {
    this.orderService.loadData().subscribe((data) => (this.cart = data))
  }

  deleteOrder(id:number){
    this.orderService.delete(id).subscribe();
    this.loadOrders()
  }

}
