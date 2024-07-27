import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChangeDataService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"

  change(data: any){
    return this.http.post<Message>(`${this.backendUrl}/change/change`, data);
  }

}
