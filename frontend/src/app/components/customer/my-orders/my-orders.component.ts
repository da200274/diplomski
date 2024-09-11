import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{

  constructor(
    private fetchServis: FetchService
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.fetch_user()
    this.fetch_orders()
    this.active_tab = "poslato"
  }

  fetch_orders(){
    this.fetchServis.user_orders(this.user.username).subscribe(
      orders=>{
        if(orders){
          this.orders = orders
        }
      }
    )
  }

  fetch_user(){
    let temp = localStorage.getItem("user")
    if(temp){
      this.user = JSON.parse(temp)
    }
  }

  show_more(s: Order){
    this.order = s;
    this.order.show_details = !this.order.show_details;
  }


  getDay(d: Date){
    const date = new Date(d)
    return date.getDate()
  }

  getMonth(d: Date){
    const date = new Date(d)
    return date.getMonth() + 1
  }

  getYear(d: Date){
    const date = new Date(d)
    return date.getFullYear()
  }

  set_active_tab(tab: string){
    this.active_tab = tab
    this.order.show_details = false
  }

  modify_id(id: string){
    const part1: string = id.slice(0, 5)
    const part2: string = '...'
    const part3: string = id.slice(-5)

    return part1 + part2 + part3 
  }

  orders: Order[] = []
  order: Order = new Order()
  message: Message = new Message()

  user: User = new User()

  active_tab: string = "";
}
