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
    return this.http.get(`${environment.base_url}/?apikey=${environment.api_key}` + url);
    // return url;
  }

  public initializationMovieList(initializationQuery) {
    return this.http.get(`${environment.base_url}/?apikey=${environment.api_key}` + initializationQuery);
    // return initializationQuery;
  }
}
