import { Input,Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor() { }

  @Input() auction:Auction
  ngOnInit(): void {
  }

}
