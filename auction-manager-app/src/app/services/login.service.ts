import { Injectable } from '@angular/core';
import { ActiveuserService } from './activeuser.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpService,
    public activeUser:ActiveuserService
  ) {
  }
  login(userstring,password:string){

  }
  logout(){
    this.activeUser.updateLoggedInStatus(false);
  }
}
