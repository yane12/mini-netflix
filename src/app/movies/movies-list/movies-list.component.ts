import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'mn-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
