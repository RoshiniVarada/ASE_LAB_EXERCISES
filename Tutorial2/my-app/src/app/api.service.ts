import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	weatherDetailsbyName(value: any) {
		throw new Error("Method not implemented.");
	}
   APIkey = "ea9e30eaf938bd9440a04c84fa57dd34";
   getURL = "https://api.openweathermap.org/data/2.5/";
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

  public weatherDetailsByName(Details){  
    return this.httpClient.get<any>(this.getURL+"weather?"+"q="+ Details.CountryName + "&APPID=" + this.APIkey).pipe(catchError(this.handleError));
  }  
  public hourlyForecast(Details){  
    return this.httpClient.get<any>(this.getURL+"forecast?"+"q="+ Details.CountryName +  "&APPID=" + this.APIkey).pipe(catchError(this.handleError));
	} 
}


