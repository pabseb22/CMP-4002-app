import { Input, Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Auction } from 'src/app/models/auction';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public spinner: NgxSpinnerService,
    public activeuser: ActiveuserService,
    private router:Router
  ) { }

  @Input() auction: Auction;
  @Input() type: number;
  seller:boolean;
  enroled: boolean = false;

  ngOnInit(): void {
    this.activeuser.getSellerStatus().subscribe(res=>{
      this.seller = res
    })
    if (this.auction.bids.includes(this.activeuser.getUser())) {
      this.enroled = true
    }
  }

  endAuction(){
    let acc = {auction_id: this.auction.id};


  }

  openDialog() {
    if (this.type == 0) {
      if (this.auction.bids.includes(this.activeuser.getUser())) {
        Swal.fire("You are already in this auction, go to My Auction page")
        return
      }
      const dialogRef = this.dialog.open(OptionsDialog, { data: this.auction });
    } else if (this.type == 1) {
      const dialogRef = this.dialog.open(NonActiveAuction, { data: this.auction });
    } else if (this.type == 2) {
      const dialogRef = this.dialog.open(YourAuction, { data: this.auction });
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
    private spinner: NgxSpinnerService
  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save(price) {
    this.close();
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
    private spinner: NgxSpinnerService

  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save(price) {

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
    private spinner: NgxSpinnerService
  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save(){

  }

}
