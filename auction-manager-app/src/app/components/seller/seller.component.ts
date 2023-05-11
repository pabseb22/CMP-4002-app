import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA ,} from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { parse } from 'path';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';
import { AuctionService } from 'src/app/services/auction.service';
import { ItemsService } from 'src/app/services/items.service';
import { finished } from 'stream';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public itemsService: ItemsService
  ) { }

  items:Item[]=[]

  ngOnInit(): void {
    this.getItems(2);
  }

  getItems(userID:number){
    //request;
    this.items = this.itemsService.getItems()
    return this.items
  }


  addItem(){
  }

  openDialog() {
    this.dialog.open(addAuction, {
      data: {
        items: this.items
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'addAuction.html',
})
export class addAuction {
  @ViewChild('itemsList') itemsList: MatSelectionList;
  @ViewChild('toggleBtn') toggleBtn: MatButtonToggleGroup;
  fontStyleControl = new FormControl('');
  time:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<addAuction>,
    private auctionservice:AuctionService
  ) {
  }
  save() {
    let item_to_be_auctioned = this.itemsList.selectedOptions.selected.map(s => s.value)
    let start_time =  new Date()
    let da = new Date()
    da.setDate((start_time.getDate() + parseInt(this.toggleBtn.value)))
    this.auctionservice.addAuction(new Auction(0,item_to_be_auctioned[0],0,start_time,da))
    this.close()
  }

  close() {
      this.dialogRef.close();
  }
}

