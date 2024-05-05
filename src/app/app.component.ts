import {Input, Component } from '@angular/core';
import { ActiveuserService } from './services/activeuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMP-4002-app';
  @Input() menuItems: any[] =["buyer","seller","login","auction"];
  @Input() connected:boolean
  constructor(private activeuser:ActiveuserService){
    this.activeuser.getLoggedInStatus().subscribe(res=>{
      this.connected = res
    })
  }
}
