import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class InsertDataService {
  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"
  add_order(o: Order){
    const data = {
      order: o
    }
    return this.http.post<Message>(`${this.backendUrl}/insert/order`, data);
  }

}
