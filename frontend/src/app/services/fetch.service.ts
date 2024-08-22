import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { Notification } from '../models/notification';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"

  user_by_korime(username: string){
    const data = {
      username: username
    }
    return this.http.post<User>(`${this.backendUrl}/get/user_by_korime`, data);
  }

  products_by_type(type: string){
    const data = {
      type: type
    }
    return this.http.post<Product[]>(`${this.backendUrl}/get/products_by_type`, data);
  }

  orders(){
    return this.http.post<Order[]>(`${this.backendUrl}/get/orders`, "");
  }

  notifications_for_username(username: string){
    const data = {
      username: username
    }
    return this.http.post<Notification[]>(`${this.backendUrl}/get/notifications_for_username`, data);
  }

  comments_by_product(product_id: string){
    const data = {
      product_id: product_id
    }
    return this.http.post<Comment[]>(`${this.backendUrl}/get/comments_by_product`, data);
  }

}
