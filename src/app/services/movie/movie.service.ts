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
    console.log(this.http.get(`http://www.omdbapi.com/?apikey=&i=${movieId}`))
    return this.http.get(`http://www.omdbapi.com/?apikey=&i=${movieId}`);
  }
}
