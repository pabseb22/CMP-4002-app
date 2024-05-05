import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActiveuserService } from 'src/app/services/activeuser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User
  constructor(private activeUser:ActiveuserService) {
    this.user = this.activeUser.user
  }

  ngOnInit(): void {
  }

}
