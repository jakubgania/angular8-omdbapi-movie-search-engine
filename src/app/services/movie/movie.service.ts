import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  public getMovieById(movieId) {
    return this.http.get(`${environment.base_url}/?apikey=${environment.api_key}&i=${movieId}`);
  }
}
