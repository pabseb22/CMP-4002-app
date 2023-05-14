import { Input,Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Auction } from 'src/app/models/auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
    public spinner :NgxSpinnerService,
  ) { }

  @Input() auction:Auction;
  @Input() type:number;

  ngOnInit(): void {
  }

  openDialog() {
    if(this.type==0){
      const dialogRef = this.dialog.open(OptionsDialog,{data:this.auction});
    }else if(this.type==1){
      const dialogRef = this.dialog.open(NonActiveAuction,{data:this.auction});
    }else if(this.type==2){
      const dialogRef = this.dialog.open(YourAuction,{data:this.auction});
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './options.html',
})
export class OptionsDialog {
  value = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Auction,
    private dialogRef: MatDialogRef<OptionsDialog>,
    private auctionService: AuctionService,
    private spinner: NgxSpinnerService

  ){
  }
  close(){
    this.dialogRef.close()
  }
  save(){
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './your-auction.html',
})
export class YourAuction {
  value = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Auction,
    private dialogRef: MatDialogRef<YourAuction>,
    private auctionService: AuctionService,
    private spinner: NgxSpinnerService

  ){
  }
  close(){
    this.dialogRef.close()
  }
  save(){
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './non-active.html',
})
export class NonActiveAuction {
  value = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Auction,
    private dialogRef: MatDialogRef<NonActiveAuction>,
    private auctionService: AuctionService,
    private spinner: NgxSpinnerService
  ){
  }
  close(){
    this.dialogRef.close()
  }
  save(){

  }


}
