import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { InsertDataService } from 'src/app/services/insert-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(
    private insertServis: InsertDataService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.fetch_order()
    this.calculate_price()
    this.fetch_user()
  }

  fetch_order(){
    let temp = localStorage.getItem("cart")
    if(temp){
      this.order = JSON.parse(temp)
    }
  }

  calculate_price(){
    this.price = 0
    for(let i = 0; i < this.order.content.length; i++){
      this.price += this.order.content[i].amount * this.order.content[i].product.price
    }
  }

  fetch_user(){
    let temp = localStorage.getItem("user")
    if(temp){
      this.k = JSON.parse(temp)
    }
  }

  store_order(){
    localStorage.setItem("cart", JSON.stringify(this.order))
  }

  add(id: string){
    const cart_item = this.order.content.find(item => item.id === id)
    if(cart_item){
      cart_item.amount++
    } else {
      console.log("Content not found");
    }
    this.store_order()
    this.initialize()
  }

  sub(id: string){
    const cart_item = this.order.content.find(item => item.id === id)
    if(cart_item && cart_item.amount > 1){
      cart_item.amount--
    } else {
      console.log("Content not found");
    }
    this.store_order()
    this.initialize()
  }

  remove(id: string){
    const cart_item_index = this.order.content.findIndex(item => item.id === id);
    if (cart_item_index !== -1) {
      this.order.content.splice(cart_item_index, 1);
    } else {
      console.log("Content not found");
    }
    this.store_order()
    this.initialize()
  }

  to_order(){
    this.insertServis.add_order(this.k.username, this.price, this.order.content).subscribe(
      message=>{
        if(message.message == "ok"){
          localStorage.removeItem("cart")
          this.router.navigate([''])
        }
      }
    )
  }

  k: User = new User()
  order: Order = new Order()
  price: number = 0

}
