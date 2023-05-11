import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveuserService {

  isseller:boolean;
  constructor() {
    this.isseller = true;
  }

  getType(){
    return this.isseller
  }
}
