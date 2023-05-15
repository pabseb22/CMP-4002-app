import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Buyer } from '../models/buyer';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ActiveuserService {

  isseller:boolean;
  user: User
  public connected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public seller: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  getLoggedInStatus(): Observable<boolean> {
      return this.connected$.asObservable();
  }

  // Updates the Behavior Subject
  updateLoggedInStatus(LoggedIn: boolean): void {
      this.connected$.next(LoggedIn);
  }

  getSellerStatus(): Observable<boolean> {
      return this.seller.asObservable();
  }

  // Updates the Behavior Subject
  updateSeller(LoggedIn: boolean): void {
      this.seller.next(LoggedIn);
  }

  getUser(){
    return this.user.email
  }

  setUser(user:User){
    this.user = user;
    if(this.user.type==1){
      this.isseller=true
    }else{
      this.isseller=false
    }
  }
  getType(){
    return this.isseller
  }

}
