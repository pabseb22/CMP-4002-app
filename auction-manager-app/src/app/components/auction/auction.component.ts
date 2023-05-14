import { Input,Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';

import { Auction } from 'src/app/models/auction';
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
  ) { }

  @Input() auction:Auction
  ngOnInit(): void {
  }

  openDialog() {
    console.log(this.auction);
    const dialogRef = this.dialog.open(OptionsDialog,{data:this.auction});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './options.html',
})
export class OptionsDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Auction){
  }
}

