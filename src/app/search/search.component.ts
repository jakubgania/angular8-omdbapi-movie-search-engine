import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SearchService } from '../services/search/search.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  movieList;
  totalResults;
  paginationCounter: number = 1;
  queryParameters: string = '';
  initializationQueryParameters: string = '&s=story&y=2019&plot=full';

  constructor(
    public fb: FormBuilder,
    private searchService: SearchService,
    private title: Title
  ) {
    this.form = this.fb.group({
      title: [''],
      year: [''],
      type: [''],
      plot: ['']
    })
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   title: [''],
    //   year: [''],
    //   type: ['Film'],
    //   plot: ['']
    // })

    this.title.setTitle('Wyszukiwanie');
    this.queryParameters = this.initializationQueryParameters;
    this.searchService.initializationMovieList(this.initializationQueryParameters).subscribe((data) => {
      this.totalResults = data['totalResults'];
      this.movieList = data['Search'];
    })
  }

  submitForm() {
    this.paginationCounter = 1;
    this.queryParameters = '';

    console.log(this.form.value)

    let url: string = '';

    if (this.form.value.title) {
      url += '&s=' + this.form.value.title;
    }

    if (this.form.value.year) {
      url += '&y=' + this.form.value.year;
    }

    if (this.form.value.type) {
      url += '&type=' + this.form.value.type;
    }

    if (this.form.value.plot) {
      url += '&plot=' + this.form.value.plot;
    }

    console.log(url);

    this.queryParameters = url;

    this.searchService.searchMovies(url).subscribe((data) => {
      console.log(data);
      this.movieList = data['Search'];
      this.totalResults = data['totalResults'];
    });
  }

  onScroll() {
    console.log('next post');
    this.loadNextData();
  }

  loadNextData() {
    let url = this.queryParameters + `&page=${++this.paginationCounter}`;
    console.log('next post');
    console.log(url);
    console.log(this.movieList.length);
    console.log(this.totalResults);

    if (this.movieList.length < this.totalResults) {
      this.searchService.searchMovies(url).subscribe((data) => {
        this.movieList = [...this.movieList, ...data['Search']];
        console.log(this.movieList);
      });
    }
  }
}
