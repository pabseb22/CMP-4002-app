import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(

  ) { }
  auctions:Auction[]=[]

  ngOnInit(): void {
    this.getAuctions();
  }

  getAuctions(){
    // this.auctionservice.getAuctions().subscribe((res:any) => {
    //   this.auctions = res;
    // });
  }

  addItem(){
  };
}
