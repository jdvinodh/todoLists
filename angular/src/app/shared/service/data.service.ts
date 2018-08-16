import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {

  // apiEndPoint = 'http://localhost:3000/'; // Url configuration, please change as per your path
   apiEndPoint = 'https://born-interview-portal.herokuapp.com/';
  customerauth = '';
  counter: number;


  private nameSource = new BehaviorSubject<any>({});
  currentName = this.nameSource.asObservable();

  updateName(username: string) { // Search Input
    this.nameSource.next(username);
  }
}
