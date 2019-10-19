import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies/shared/movie.service';


@Component({
  selector: 'mn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private movieService: MovieService) { }


  _seachWord: string;
  get searchWord(): string {
    return this._seachWord;
  }
  set searchWord(value: string) {
    this._seachWord = value;
    // console.log(this._seachWord)
    // this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  ngOnInit() {
  }

  search(formValues): void {
    console.log(formValues);
    this.searchWord = formValues['searchWord'];
    // console.log(this.searchWord);
  }

  searchMovies(): void {
    // this.movieService.setSeachWord(this.searchWord);
    console.log(this.searchWord);
  }

}
