import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }

  GetMovieData():Observable<any> {

    return this.http.get('http://www.jsonblob.com/1106342670233780224'); //Attempt at retrieving data from API

  }
}
