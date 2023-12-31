import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  apiURL = 'https://apicv-service-natalialm-26.cloud.okteto.net/skills'
  constructor( private http:HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getskills(): Observable<any>{
    return this.http.get<any>(this.apiURL, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
      }else{
        // Get server-side error
        errorMessage= `Error Code: ${error.status}\n Message: ${error.message}`;
  }

  window.alert(errorMessage);
  return throwError(errorMessage);
  }
}