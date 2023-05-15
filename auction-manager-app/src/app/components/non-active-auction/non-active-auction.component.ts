import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';
import { AuctionService } from 'src/app/services/auction.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-non-active-auction',
  templateUrl: './non-active-auction.component.html',
  styleUrls: ['./non-active-auction.component.css']
})
export class NonActiveAuctionComponent implements OnInit {
  constructor(private itemService: ItemsService) { }
  items:Item[]=[]
  ngOnInit(): void {
    this.getAuctions();
  }
  getAuctions(){
    this.itemService.getItems().subscribe((res:any)=>{
      this.items = res;
    });
    this.items = this.items.filter(function(it:Item){
      return it.available == 1
    })
  }
  addItem(){};
}

