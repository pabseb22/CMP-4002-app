import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  constructor(
    private itemsService: ItemsService,
    public dialog: MatDialog,
  ) { }

  items:Item[]=[]

  ngOnInit(): void {
    this.getItems();
    
  }
  refresh(value){
    if(value){
      this.getItems()
    }
  }
  getItems(){
    //request;
    this.itemsService.getItems().subscribe((res:any)=>{
      this.items = res;
    });
    return this.items
  }
  addItem(){
    this.openDialogItems()
  }

  openDialogItems() {
    const dialogRef = this.dialog.open(addItem, {
      data: {
        items: this.items
      },
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      this.ngOnInit()
    });
  }

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'addItem.html',
})
export class addItem {
  @ViewChild('itemsList') itemsList: MatSelectionList;
  @ViewChild('toggleBtn') toggleBtn: MatButtonToggleGroup;

  time:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<addItem>,
    private itemsService:ItemsService
  ) {
  }
  close() {
      this.dialogRef.close();
  }
  addItem(data:any){
    this.itemsService.addItem(new Item(data.id,data.name,data.image,data.des,1,data.price,[])).subscribe((res:any)=>{
      this.dialogRef.close()
      
    })
    
  }

  //TO DO: Delete Function
}
