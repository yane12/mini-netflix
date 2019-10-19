import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: string;
  movie: any;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovie(this.id);
  }

}
