import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(
    private auctionservice:AuctionService

  ) { }
  auctions:Auction[]=[]

  ngOnInit(): void {
    this.getAuctions();
  }

  getAuctions(){
    this.auctionservice.getAuctions().subscribe((res:any) => {
      this.auctions = res;
    });
  }
  addItem(){
  };
}
