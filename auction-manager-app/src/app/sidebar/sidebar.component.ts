import { Input,Component, OnInit } from '@angular/core';
import { ActiveuserService } from '../services/activeuser.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems: any[] =["buyer","seller","login","auction"];
  seller:boolean=true;
  constructor(private ac:ActiveuserService) { }

  ngOnInit(): void {
    this.seller = this.ac.getType()
  }

}
