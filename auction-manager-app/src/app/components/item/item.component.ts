import { Component, Input, OnInit } from '@angular/core';
import { Buyer } from 'src/app/models/buyer';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }


  @Input() item:Item
    ngOnInit(): void {
  }

}
