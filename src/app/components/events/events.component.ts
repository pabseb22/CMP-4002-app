import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any[] = [];
  selectedCategory: number;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
    private ac: ActiveuserService,
  ) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(
      (response: any) => {
        this.events = response.events;
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  openRegistrationDialog(event: any): void {
    event.registrationDialogOpen = true;
    this.selectedCategory = null;
    console.log(event);
    this.eventService.getEventCategories(event.event_id).subscribe(
      (response: any) => {
        console.log(response.categories);
        event.categories = response.categories;
      },
      (error: any) => {
        console.error('Error fetching event categories:', error);
      }
    );
  }

  closeRegistrationDialog(event: any): void {
    event.registrationDialogOpen = false;
  }

  registerForEvent(event: any): void {
    if (!this.selectedCategory) {
      Swal.fire('Please select a category');
      return;
    }
    let user = this.ac.getUser();
    const eventData = {
      external_user_id: user.user_id || 1,
      event_id: event.event_id,
      category_id: this.selectedCategory,
      running_number: '00001',
      status: "",
      payment_method: ""
    };
    console.log(eventData);

    this.eventService.registerUserToEvent(eventData).subscribe(
      (response: any) => {
        Swal.fire('Registration successful');
        this.closeRegistrationDialog(event);
      },
      (error: any) => {
        console.error('Error registering for event:', error);
        Swal.fire('Error registering for event');
      }
    );
  }

}