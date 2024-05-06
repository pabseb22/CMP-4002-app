import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private ac: ActiveuserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    this.eventService.login(email, password);
  }
}
