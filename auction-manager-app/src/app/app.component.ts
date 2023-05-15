import {Input, Component } from '@angular/core';
import { ActiveuserService } from './services/activeuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-manager-app';
  @Input() menuItems: any[] =["buyer","seller","login","auction"];
  @Input() connected:boolean
  constructor(private activeuser:ActiveuserService){
    this.activeuser.getLoggedInStatus().subscribe(res=>{
      this.connected = res
    })
  }
}
