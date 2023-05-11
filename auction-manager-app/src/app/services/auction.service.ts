import { Injectable } from '@angular/core';
import { Auction } from '../models/auction';
import { Buyer } from '../models/buyer';
import { Item } from '../models/item';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  auctions:Auction[] =[];
  constructor(private itemservice:ItemsService) {
    let items = this.itemservice.getItems();
    this.auctions.push(new Auction(0,items[0],1,new Date(),new Date()))
  }

  getAuctions(){
    return this.auctions
  }
  addAuction(acc:Auction){
    this.auctions.push(acc)
  }
}
