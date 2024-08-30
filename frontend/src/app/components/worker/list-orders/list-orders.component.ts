import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { FetchService } from 'src/app/services/fetch.service';
import { UpdateDataService } from 'src/app/services/update-data.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit{

  constructor(
    private fetchServis: FetchService,
    private updateServis: UpdateDataService
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.fetch_orders()
    this.fetch_user()
    this.active_tab = "poslato";
  }

  fetch_orders(){
    this.fetchServis.orders().subscribe(
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

  accept(){
    this.updateServis.change_status(this.order._id, "odobreno", this.order.username).subscribe(
      message=>{
        if(message.message == "ok"){
          this.initialize()
        }
      }
    )
  }

  decline(){
    this.updateServis.change_status(this.order._id, "odbijeno", this.order.username).subscribe(
      message=>{
        if(message.message == "ok"){
          this.initialize()
        }
      }
    )
  }

  finish(){
    this.updateServis.change_status(this.order._id, "zavrseno", this.order.username).subscribe(
      message=>{
        if(message.message == "ok"){
          this.initialize()
        }
      }
    )
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

  orders: Order[] = []
  order: Order = new Order()
  message: Message = new Message()

  user: User = new User()

  active_tab: string = ""
}
