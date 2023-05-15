import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { 
  }

  /**
   * Sends a GET request to the specified URL.
   * @param url The URL to send the request to.
   * @param id An ID parameter to send.
   * @param urlParams The query parameters of the request.
   */
   public get<T>(url: string, urlParams?: HttpParams) {
    return this.http.get<T>(`${url}`, this.httpOptions).pipe(retry(1), finalize(() => this.spinner.hide()), catchError(this.handleError)
    );
  }
  /**
   * Sends a POST request to the specified URL.
   * @param url The URL to send the request to.
   * @param body The body of the request.
   * @param urlParams The query parameters of the request.
   */
  public post<T>(url: string, body: any, urlParams?: HttpParams) {
    return this.http.post<T>(url, body, this.httpOptions).pipe(retry(1), finalize(() => this.spinner.hide()), catchError(this.handleError),
      
    );
  }
  /**
   * Sends a PUT request to the specified URL.
   * @param url The URL to send the request to.
   * @param body The body of the PUT request.
   */

  private  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      Swal.fire({title: 'Oops...',
      html: `Se ha presentado un problema con el servidor.`,
      icon: 'error',
      confirmButtonColor: '#030303',
      confirmButtonText: 'Ok'});
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
