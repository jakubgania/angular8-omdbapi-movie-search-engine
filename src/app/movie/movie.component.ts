import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie;
  movieId;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id;
    console.log(this.movieId);
    this.movie = this.movieService.getMovieById(this.movieId).subscribe((data) => {
      console.log(data);
      let xd = this.splitArray(data['Actors']);
      console.log(xd);
      data['Actors'] = xd;
      // console.log(data.Actors);
      // data.Actors.push(xd);
      this.movie = data;
    });
  }

  private splitArray(inputArray) {
    var items:string[];

    return inputArray.split(',');
  }

}
