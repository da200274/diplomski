import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  constructor(
    private fetchServis: FetchService
  ){}

  ngOnInit(): void {
    this.fetchServis.products_by_type(this.type).subscribe(
      actions=>{
        if(actions){
          this.promotions = actions
        }
      }
    )
  }

  promotions: Product[] = []
  type: string = "sale"

}
