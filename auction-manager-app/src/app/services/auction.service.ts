import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Auction } from '../models/auction';
import { Bid } from '../models/bid';
import { Buyer } from '../models/buyer';
import { Item } from '../models/item';
import { ActiveuserService } from './activeuser.service';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  auctions:Auction[] =[];

  constructor(private itemservice:ItemsService,
    private activeuserService:ActiveuserService
  ) {
    let items = this.itemservice.getItems();
    this.auctions.push(new Auction(0,items[0],1,new Date(),new Date(),[]))
  }

  getAuctions(){
    return this.auctions
  }

  addAuction(acc:Auction){
    let item = acc.items;
    // for item.interested{
    //   les mandas un mail
    // }
    this.auctions.push(acc)
  }

  addBid(acc:number,price:number){
    for (let i = 0, len = this.auctions.length; i < len; i++) {
      if(this.auctions[i].id == acc){
        if(this.auctions[i].price<price){
          this.auctions[i].price = price;
          for (let j = 0, len = this.auctions[i].bids.length; j < len; j++) {
            if(this.auctions[i].bids[j].user == this.activeuserService.getUser()){
              const index = this.auctions[i].bids.indexOf(this.auctions[i].bids[j]);
              this.auctions[i].bids.splice(index, 1)
            }
          }
          this.auctions[i].bids.push(new Bid(this.activeuserService.getUser(),price))
        }else{
          Swal.fire("You have to make a bid bigger that current price")
        }
      }
    }
  }
}
