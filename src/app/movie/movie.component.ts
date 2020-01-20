import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie;
  movieId;
  fullDialogImagePoster: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private title: Title
  ) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id;

    this.movie = this.movieService.getMovieById(this.movieId).subscribe((data) => {
      let actorsArray:string[] = this.splitArray(data['Actors']);
  
      data['Actors'] = actorsArray;
      this.movie = data;

      this.title.setTitle(this.movie['Title']);
    });
  }

  private splitArray(inputArray) {
    var items:string[];

    return inputArray.split(',');
  }

  fullImagePoster() {
    this.fullDialogImagePoster = !this.fullDialogImagePoster;
    console.log(this.fullDialogImagePoster);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode == 27){
      this.fullImagePoster();
    }
  }

}
