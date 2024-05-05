import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA ,} from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { parse } from 'path';
import { Auction } from 'src/app/models/auction';
import { Item } from 'src/app/models/item';
import { finished } from 'stream';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(public dialog: MatDialog,

  ) { }

  items:Auction[]=[]
  items_selling:Item[]=[]

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){

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
  ) {
  }
  save() {
    let item_to_be_auctioned = this.itemsList.selectedOptions.selected.map(s => s.value)
    let start_time =  new Date()
    let da = new Date()
    this.close()
  }

  close() {
      this.dialogRef.close();
  }
}

