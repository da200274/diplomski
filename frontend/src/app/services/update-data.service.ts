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

  change_status(_id: string, status: string, username: string){
    
    const data = {
      id: _id,
      status: status,
      username: username
    }

    return this.http.post<Message>(`${this.backendUrl}/update/change_status`, data);
  }

  change_seen(text: string){
    
    const data = {
      notification: text
    }

    return this.http.post<Message>(`${this.backendUrl}/update/change_seen`, data);
  }

  /*
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
