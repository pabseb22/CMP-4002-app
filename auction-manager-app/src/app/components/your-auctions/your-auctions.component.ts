import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-your-auctions',
  templateUrl: './your-auctions.component.html',
  styleUrls: ['./your-auctions.component.css']
})
export class YourAuctionsComponent implements OnInit {

  constructor(
    private auctionservice:AuctionService,
    private activeUserService:ActiveuserService
  ) { }

  auctions:Auction[]=[]
  loosingAuctions:Auction[]=[]
  closedAuctions:Auction[]=[]

  ngOnInit(): void {
    this.getAuctions();

  }
  getAuctions(){
    let aux = [];
    this.auctionservice.getAuctions().subscribe((res:any) => {
      aux = res;

      let email = this.activeUserService.getUser()

      for (let i = 0, len = aux.length; i < len; i++) {
        if(aux[i].status == 1){
          this.closedAuctions.push(aux[i]);
          continue
        }   
          if(aux[i].bids[aux[i].bids.length-1] == email){
            this.auctions.push(aux[i]);
          }else if (aux[i].bids.includes(email)){
            this.loosingAuctions.push(aux[i])
          }
        
      }
    });



  }
  addItem(){};
}

