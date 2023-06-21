import { Component } from '@angular/core';
import { ProductService } from '../../servers/product.service'; // Adjust the path based on your file structure
import { OrdersService } from 'src/app/servers/orders.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any[] = []
  cart:any[]=[]

  constructor(private productService: ProductService, private orderService:OrdersService) {
    this.loadData();
  }

  loadData() {
    this.productService.getProducts().subscribe((data) => (this.products = data))
  }

  add(nameInput:string, priceInput:number ) {
    const data = {
      "desc":nameInput,
      "price":priceInput
    }
    this.productService.createProduct(data).subscribe((res) => console.log(res));
    this.loadData()
  }

  deleteProd(id:number){
    this.productService.deleteProduct(id).subscribe((res) => console.log(res));
    this.loadData()
  }

  buy() {
    if (localStorage.getItem('token')) {
        console.log('Order has been purchased');
        
      this.orderService.checkOut(this.cart).subscribe(res => console.log(res))
    }else {
      alert('You\'re not logged in')
    }
    
  }

  addToCart(price: number, desc: string, id: number) {
    
    this.cart.push({amount:1,desc,price})
    console.log( this.cart);
  }


  }

