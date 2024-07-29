import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-sweets-list',
  templateUrl: './sweets-list.component.html',
  styleUrls: ['./sweets-list.component.css']
})
export class SweetsListComponent implements OnInit{

  constructor(private fetchServis: FetchService){}

  ngOnInit(): void {
    this.initialize();
  }

  update_paged_items() {
    const start_index = (this.current_page - 1) * this.items_per_page;
    const end_index = start_index + this.items_per_page;
    this.paged_items = this.products.slice(start_index, end_index);
  }

  on_page_changed(page: number) {
    this.current_page = page;
    this.update_paged_items();
  }

  initialize(){
    this.extract_type()

    this.fetchServis.products_by_type(this.type).subscribe(
      products=>{
        if(products){
          this.products = products
          this.update_paged_items();
        }
      }
    )
  }

  extract_type(){
    let temp_type = localStorage.getItem("sweet_type")
    if(temp_type){
      this.type = temp_type
    }
    else{
      this.type = ''
    }
  }

  getRows(items: any[]): any[][] {
    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    return rows;
  }

  type: string = ""
  products: Product[] = []

  paged_items: any[] = [];
  current_page: number = 1;
  items_per_page: number = 3;

}
