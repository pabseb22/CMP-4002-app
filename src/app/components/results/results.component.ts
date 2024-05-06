import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: any[] = []; // Ensure Result model matches the fields you fetch

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadResultsForEvent('1'); // Replace 'YOUR_EVENT_ID' with the actual event ID
  }

  loadResultsForEvent(eventId: string): void {
    this.eventService.getResultsByEventId(eventId).subscribe(
      (data: any) => {
        console.log(data.results);
        
        this.results = data.results;
      },
      (error) => {
        console.error('Error fetching results:', error);
      }
    );
  }
}
