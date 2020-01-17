import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  public searchMovies(url) {
    console.log('search movie');

    return this.http.get(`${environment.base_url}/?apikey=${environment.api_key}` + url);
  }

  public initializationMovieList() {
    return this.http.get(`${environment.base_url}/?apikey=${environment.api_key}&s=story&y=2019&plot=full`);
  }
}
