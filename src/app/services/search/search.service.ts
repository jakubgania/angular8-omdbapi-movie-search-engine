import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  public searchMovies(url) {
    console.log('search movie');

    return this.http.get('http://www.omdbapi.com/?apikey=' + url);
  }
}
