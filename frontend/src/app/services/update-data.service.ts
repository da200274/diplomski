import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"
  
  change_password(korime: string, lozinka: string){
    const data = {
      korime: korime,
      lozinka: lozinka
    }
    return this.http.post<Message>(`${this.backendUrl}/update/change_password`, data);
  }
/*
  accept_order(korime: string, _id: string, vreme_dostave: number){
    
    const data = {
      korime: korime,
      id: _id,
      vreme_dostave: vreme_dostave
    }
    return this.http.post<Poruka>(`${this.backendUrl}/update/accept_offer`, data);
  }

  reject_order(_id: string){
    const data = {
      id: _id
    }
    return this.http.post<Poruka>(`${this.backendUrl}/update/reject_offer`, data);
  }

  delivered_order(_id: string){
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
