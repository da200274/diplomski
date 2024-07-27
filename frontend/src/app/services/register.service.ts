import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:4000"

  register_user(username: string, password: string, question: string, answer: string, name: string, surname: string,
    address: string, contact: string, mail: string, profile_pic: string, type: string){
    const data = {
      username: username,
      password: password,
      question: question,
      answer: answer,
      name: name,
      surname: surname,
      address: address,
      contact: contact, 
      mail: mail,
      profile_pic: profile_pic,
      type: type
    }
    return this.http.post<Message>(`${this.backendUrl}/register/register`, data);
  }

  file_upload(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Message>(`${this.backendUrl}/register/add_photo`, formData);
  }

  update_photo(path: string, username: string){
    const data = {
      username: username,
      path: path
    }
    //console.log(path)
    return this.http.post<Message>(`${this.backendUrl}/register/update_photo`, data);
  }
}

