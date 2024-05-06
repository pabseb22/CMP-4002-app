import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { ActiveuserService } from './activeuser.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_API = "http://localhost:3000";

  constructor(
    private http: HttpService,
    private ac: ActiveuserService,
    private router: Router
  ) { }

  login(email: string, password: string): void {
    this.http.post(`${this.URL_API}/login`, { email, password }).subscribe((res: any) => {
      if (res === "error") {
        Swal.fire("Something went wrong with validation");
      } else {
        console.log(res);
        let data = res;
        this.ac.updateLoggedInStatus(true);
        this.ac.setUser(new User(data.name, data.lastname, data.email, data.user_id));
        this.router.navigate(['events']);
      }
    });
  }

  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/get-events`);
  }

  getEventCategories(eventId: number): Observable<any> {
    return this.http.post<any>(`${this.URL_API}/get-event-categories`, { eventId });
  }

  registerUserToEvent(userData: any): Observable<any> {
    return this.http.post<any>(`${this.URL_API}/register-user-to-event`, userData);
  }

  getResultsByEventId(eventId: string): Observable<any> {
    return this.http.post<any>(`${this.URL_API}/get-event-results`, { eventId });
  }
}
