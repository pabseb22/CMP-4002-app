import { Input, Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Auction } from 'src/app/models/auction';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import { AuctionService } from 'src/app/services/auction.service';
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
    private auctionService: AuctionService
  ) { }

  @Input() auction: Auction;
  @Input() type: number;
  enroled: boolean = false;

  ngOnInit(): void {
    if (this.auction.bids.includes(this.activeuser.getUser())) {
      this.enroled = true
    }

  }

  endAuction(){
    let acc = {auction_id: this.auction.id};
    this.auctionService.endAuciton(acc).subscribe((res:any) => {
      location.reload()
    })
    
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
    private auctionService: AuctionService,
    private spinner: NgxSpinnerService
  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save(price) {
    this.auctionService.addBid(this.data.id, price);
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
    private auctionService: AuctionService,
    private spinner: NgxSpinnerService

  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save(price) {
    this.auctionService.addBid(this.data.id, price)
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
  ) {
  }
  close() {
    this.dialogRef.close()
  }
  save() {

  }


}
