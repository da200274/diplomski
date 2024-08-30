import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeProductService {

  private eventSubject = new Subject<any>();

  event$ = this.eventSubject.asObservable();

  emitEvent(data: any) {
    this.eventSubject.next(data);
  }
}
