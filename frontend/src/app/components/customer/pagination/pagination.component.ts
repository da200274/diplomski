import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() total_items: number = 0;
  @Input() items_per_page: number = 3; // 3 items per view
  @Input() current_page: number = 1;
  @Output() page_changed: EventEmitter<number> = new EventEmitter<number>();

  total_pages: number = 0;
  pages_array: number[] = [];

  ngOnChanges() {
    this.total_pages = Math.ceil(this.total_items / this.items_per_page);
    this.pages_array = Array.from({ length: this.total_pages }, (v, k) => k + 1);
  }

  change_page(page: number) {
    if (page >= 1 && page <= this.total_pages) {
      this.current_page = page;
      this.page_changed.emit(this.current_page);
    }
  }
}
