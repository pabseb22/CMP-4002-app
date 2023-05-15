import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Auction } from '../models/auction';
import { Bid } from '../models/bid';
import { Buyer } from '../models/buyer';
import { Item } from '../models/item';
import { ActiveuserService } from './activeuser.service';
import { ItemsService } from './items.service';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  auctions:Auction[] =[];
  URL_API = "http://localhost:3000";

  constructor(private itemservice:ItemsService,
    private activeuserService:ActiveuserService,
    private http: HttpService,
    private router:Router
  ) {

  }

  getAuctions(){
    return this.http.get(`${this.URL_API}/get-auctions`);
  }

  addAuction(acc:Auction){
    return this.http.post(`${this.URL_API}/add-auction`, acc);
  }

  checkBid(acc:any){
    return this.http.post(`${this.URL_API}/check-bid`, acc);
  }

  endAuciton(acc:any){
    return this.http.post(`${this.URL_API}/end-auction`, acc);
  }

  addBidDetail(bid:Bid){
    return this.http.post(`${this.URL_API}/add-bid`, bid);
  }

  addBid(acc:number,amount:number){
    let aux = [];
    this.getAuctions().subscribe((res:any) => {
      aux = res;
      for (let i = 0, len = aux.length; i < len; i++) {
        if(aux[i].id == acc){
          if(aux[i].price<amount){
            let bid = {auction_id :acc, amount: amount, email: this.activeuserService.getUser(), user_id: 0}
            this.addBidDetail(bid).subscribe((res:any)=> {
            Swal.fire("Bid placed")
            this.router.navigate(['profile'])
            })
          }else{
            Swal.fire("You have to make a bid bigger that current price")
          }
        }
      }
    });



  }

  eliminateAuction(id:number){
  }
}
