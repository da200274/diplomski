import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"
  
  change_password(username: string, password: string){
    const data = {
      username: username,
      password: password
    }
    return this.http.post<Message>(`${this.backendUrl}/update/change_password`, data);
  }

  accept_order(_id: string, status: string){
    
    const data = {
      id: _id,
      status: status
    }

    return this.http.post<Message>(`${this.backendUrl}/update/accept_order`, data);
  }

  reject_order(_id: string, status: string){
    
    const data = {
      id: _id,
      status: status
    }

    return this.http.post<Message>(`${this.backendUrl}/update/reject_order`, data);
  }

  /*delivered_order(_id: string){
    const data = {
      id: _id
    }
    return this.http.post<Poruka>(`${this.backendUrl}/update/deliver_order`, data);
  }

  give_review(_id: string, opis: string, ocena: number){
    const data = {
      id: _id,
      komentar: opis,
      ocena: ocena
    }
    return this.http.post<Poruka>(`${this.backendUrl}/update/reviewed`, data);
  }
*/
}
