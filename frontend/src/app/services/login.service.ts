import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"
  login(username: string, password: string){
    const data = {
      username: username,
      password: password
    }
    return this.http.post<User>(`${this.backendUrl}/login/login`, data);
  }

}
