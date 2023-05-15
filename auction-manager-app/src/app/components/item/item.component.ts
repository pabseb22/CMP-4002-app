import { Component, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { Buyer } from 'src/app/models/buyer';
import { Item } from 'src/app/models/item';
import { AuctionService } from 'src/app/services/auction.service';
import { ItemsService } from 'src/app/services/items.service';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { ActiveuserService } from 'src/app/services/activeuser.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{


  constructor(public dialog: MatDialog,
    public itemservice:ItemsService,
    public activeUserService:ActiveuserService
  )
  {}

  @Input() item:Item;
  @Input() type:number;
  subscribed:boolean;

  ngOnInit(): void {
    if(this.item.interested != undefined){
      if(this.item.interested.includes(this.activeUserService.getUser())){
        this.subscribed=true;
      }else if(!this.item.interested.includes(this.activeUserService.getUser())){
        this.subscribed=false;
      }
    }
  }

  transform(value: string): string {
    return value.replace(/'/g, '');
  }

  editItem(){
    this.openDialog()
  }

  openDialog() {
    if(this.type==1 && this.item.available == 1){
      const dialogRef = this.dialog.open(editItem, {
        data: {
          item: this.item
        },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
    });
   }else if (this.item.available == 0){
      Swal.fire("This item is beign auctioned, it cannot be changed")
    }


  }

  subscribe(){
 Swal.fire({
      title: 'Are you sure want to subscribe?',
      text: 'You will recieve a notification when this auction starts',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, subscribe to '+ this.item.name,
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
          this.itemservice.susbcribeToItem(this.item.id).subscribe((res:any) => {
            this.ngOnInit()
          });
        Swal.fire(
          'Subscribed!',
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
unsubscribe(){
 Swal.fire({
      title: 'Are you sure want to unsubscribe?',
      text: 'You will recieve a notification when this auction starts',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, unsubscribe to '+ this.item.name,
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
          this.itemservice.unsusbcribeToItem(this.item.id).subscribe((res:any) => {
            this.ngOnInit()
          });;
        Swal.fire(
          'Unsubscribed!',
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'editItem.html',
})
export class editItem {
  @ViewChild('itemsList') itemsList: MatSelectionList;
  @ViewChild('toggleBtn') toggleBtn: MatButtonToggleGroup;
  @Output() changes = new EventEmitter<boolean>();
  time:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<editItem>,
    private itemservice:ItemsService
  ) {
  }

  edit(name:string,price:string,imgsrc:string,des:string) {
    let aux = new Item(this.data.item.id,name,imgsrc,des,1,parseFloat(price),[])
    this.changes.emit(true)
    this.itemservice.editItem(this.data.item.id,aux).subscribe((res:any) =>{
      this.dialogRef.close()
    })

  }

  close() {
      this.dialogRef.close();
  }
}
