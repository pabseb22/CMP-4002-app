import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ActiveuserService {

  user: User
  public connected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  getLoggedInStatus(): Observable<boolean> {
      return this.connected$.asObservable();
  }

  // Updates the Behavior Subject
  updateLoggedInStatus(LoggedIn: boolean): void {
      this.connected$.next(LoggedIn);
  }

  getUser(){
    return this.user
  }

  setUser(user:User){
    this.user = user;
  }

}
