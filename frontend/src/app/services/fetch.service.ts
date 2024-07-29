import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';

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

}
