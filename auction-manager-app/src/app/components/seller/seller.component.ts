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
    public itemsService: ItemsService,
    public auctionservice:AuctionService
  ) { }

  items:Auction[]=[]
  items_selling:Item[]=[]

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
   this.auctionservice.getAuctions().subscribe((res:any)=>{
    this.items = res;
  });
    this.itemsService.getItems().subscribe((res:any)=>{
      this.items_selling = res;
    });

  }



  openDialog() {
    const dialogRef =this.dialog.open(addAuction, {
      data: {
        items: this.items_selling
      },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      this.ngOnInit()
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
    private auctionservice:AuctionService,
    private itemservice:ItemsService
  ) {
  }
  save() {
    let item_to_be_auctioned = this.itemsList.selectedOptions.selected.map(s => s.value)
    let start_time =  new Date()
    let da = new Date()
    da.setDate((start_time.getDate() + parseInt(this.toggleBtn.value)))

    this.auctionservice.addAuction(new Auction(item_to_be_auctioned[0].id,item_to_be_auctioned[0],item_to_be_auctioned[0].starting_price,start_time,da,"","",[], 0)).subscribe((res:any) => {

    })
    this.itemservice.changeItemStatus(item_to_be_auctioned[0].id ,0)
    this.close()
  }

  close() {
      this.dialogRef.close();
  }
}

