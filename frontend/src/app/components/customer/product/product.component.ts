import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor(
    private fetchServis: FetchService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.fetch_product()
    this.fetch_comments()
  }

  fetch_product(){
    let temp = localStorage.getItem("product")
    if(temp){
      this.product = JSON.parse(temp)
    }
  }

  fetch_comments(){
    this.fetchServis.comments_by_product(this.product._id).subscribe(
      comments=>{
        if(comments){
          this.comments = comments
        }
      }
    )
  }

  fetch_order(){
    let temp = localStorage.getItem("cart")
    if(temp){
      this.order = JSON.parse(temp)
    }
  }

  store_order(){
    localStorage.setItem("cart", JSON.stringify(this.order))
  }

  add_new_item(){
    const c = {
      id: this.product._id,
      product: this.product,
      amount: 1
    }
    
    this.order.content.push(c)
    this.store_order()
  }

  add_to_cart(){
    if(localStorage.getItem("cart")){
      this.fetch_order()
      for(let i = 0; i < this.order.content.length; i++){
        if(this.order.content[i].id == this.product._id){
          this.order.content[i].amount++
          this.store_order()
          return
        }
      }
      this.add_new_item()
    }
    else{
      this.add_new_item()
    }
  }

  set_active_tab(tab: string){
    this.active_tab = tab
  }

  leave_comment(){
    this.router.navigate(['add_comment'])
  }

  product: Product = new Product()
  order: Order = new Order()

  comments: Comment[] = []

  active_tab: string = 'informacije'
}
