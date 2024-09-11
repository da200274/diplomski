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

  file_upload(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Message>(`${this.backendUrl}/change/add_photo`, formData);
  }

  update_photo(path: string, name: string, type: string){
    const data = {
      name: name,
      path: path,
      type: type
    }
    console.log(path)
    return this.http.post<Message>(`${this.backendUrl}/change/update_photo`, data);
  }

}
