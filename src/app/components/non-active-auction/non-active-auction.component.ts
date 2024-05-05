import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-non-active-auction',
  templateUrl: './non-active-auction.component.html',
  styleUrls: ['./non-active-auction.component.css']
})
export class NonActiveAuctionComponent implements OnInit {
  constructor() { }
  items:Item[]=[]
  ngOnInit(): void {
    this.getAuctions();
  }
  getAuctions(){
    // this.itemService.getItems().subscribe((res:any)=>{
    //   this.items = res;
    // });
    this.items = this.items.filter(function(it:Item){
      return it.available == 1
    })
  }
  addItem(){};
}

