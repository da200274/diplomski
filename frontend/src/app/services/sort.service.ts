import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"

  sort(column: string, direction: string){
    const data = {
      column: column,
      direction: direction
    }
    return this.http.post<Order[]>(`${this.backendUrl}/sort/sort`, data);
  }
}
