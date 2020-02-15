import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }

  public displayDetails(name){  
    return this.httpClient.get<any>("https://api.nutritionix.com/v1_1/search/' "+name+" '?results=0:1&fields=*&appId=ea1a433d&appKey=9009e40b76a78c86426713c2d145bca2").pipe(catchError(this.handleError));
  }  


}


