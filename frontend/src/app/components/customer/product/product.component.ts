import { Component, OnInit } from '@angular/core';
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
    private fetchServis: FetchService
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.fetch_product()
  }

  fetch_product(){
    let temp = localStorage.getItem("product")
    if(temp){
      this.product = JSON.parse(temp)
    }
  }

  add_to_cart(){
    if(localStorage.getItem("cart")){

    }
    else{
      
    }
  }

  product: Product = new Product()
  order: Order = new Order()
}
