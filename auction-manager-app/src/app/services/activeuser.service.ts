import { Injectable, Inject } from '@angular/core';
import { Buyer } from '../models/buyer';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ActiveuserService {

  isseller:boolean;
  user: User

  constructor() {
    this.user = new User('roberto','alvarado','1002','robdres123@gmail.com','password',0);
    this.isseller = true;
  }

  getUser(){
    return this.user.email
  }
  getType(){
    return this.isseller
  }
}
