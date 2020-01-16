import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SearchService } from '../services/search/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  movieList;
  totalResults;


  constructor(public fb: FormBuilder, private searchService: SearchService) {
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
  }

  submitForm() {
    console.log(this.form.value)

    let url: string = '';

    if (this.form.value.title) {
      console.log(this.form.value.title);

      url += '&s=' + this.form.value.title;
    }

    if (this.form.value.year) {
      console.log(this.form.value.year);

      url += '&y=' + this.form.value.year;
    }

    if (this.form.value.type) {
      console.log(this.form.value.type);

      url += '&type=' + this.form.value.type;
    }

    if (this.form.value.plot) {
      console.log(this.form.value.plot);

      url += '&plot=' + this.form.value.plot;
    }

    console.log(url);

    this.searchService.searchMovies(url).subscribe((data) => {
      console.log(data);
      this.movieList = data['Search'];
      this.totalResults = data['totalResults'];
    });
  }

}
