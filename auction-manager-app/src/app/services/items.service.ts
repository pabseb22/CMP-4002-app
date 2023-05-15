import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';
import { Item } from '../models/item';
import Swal from 'sweetalert2';
import { ActiveuserService } from './activeuser.service';
import { HttpService } from './http.service';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  URL_API = "http://localhost:3000";
  items:Item[]=[]

  constructor(
    private activeUserService:ActiveuserService,
    private http: HttpService
  ) {
  
  }

  getItems(){
    return this.http.get(`${this.URL_API}/get-items`);
  }

  addItem(item:Item){
    return this.http.post(`${this.URL_API}/add-item`, item);
  }

  changeItemStatus(id:number,value:number){
    for (let i = 0, len = this.items.length; i < len; i++) {
      if(this.items[i].id == id){
        this.items[i].available =value
      }
    }
  }

  eliminateItem(id:number){
    this.items = this.items.filter(function(obj:Item){
      return obj.id == id
    })
  }
  editItem(id:number,item:Item){
    return this.http.post(`${this.URL_API}/edit-item`, item);
  }
  susbcribeToItem(id:number){
    let data = {item_id: id, email: this.activeUserService.getUser()};
    return this.http.post(`${this.URL_API}/subscribe-to-item`, data);
  }

  unsusbcribeToItem(id:number){
    for (let i = 0, len = this.items.length; i < len; i++) {
      if(this.items[i].id == id){
        let buyer = this.activeUserService.getUser();
        //const index = this.items[i].interested.indexOf(buyer);
        //this.items[i].interested.splice(index, 1)
      }
    }
  }
}
