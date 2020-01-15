import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  public getMovieById(movieId) {
    console.log('api call');
    console.log(this.http.get())
    return this.http.get();
  }
}
