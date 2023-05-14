import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-your-auctions',
  templateUrl: './your-auctions.component.html',
  styleUrls: ['./your-auctions.component.css']
})
export class YourAuctionsComponent implements OnInit {

  constructor(
    private auctionservice:AuctionService,

  ) { }

  auctions:Auction[]=[]

  ngOnInit(): void {
    this.getAuctions();

  }
  getAuctions(){
    this.auctions =this.auctionservice.getAuctions();

  }
  addItem(){};
}

