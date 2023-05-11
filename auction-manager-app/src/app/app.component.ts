import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-manager-app';
  @Input() menuItems: any[] =["buyer","seller","login","auction"];
}
