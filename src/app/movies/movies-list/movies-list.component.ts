import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mn-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any[] = [
    {
      "Title": "My Best Friend's Wedding",
      "Year": "1997",
      "imdbID": "tt0119738",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzRiMGE2MmMtM2RhMy00OWNiLTljYTktOThmMmE1YjY1NjYyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      "Title": "The Best Offer",
      "Year": "2013",
      "imdbID": "tt1924396",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2IxMjFmNWEtNmEyNS00MmNmLTk5ZWYtYTY5YTA1NjgwNDFmXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
    },
    {
      "Title": "The Best Exotic Marigold Hotel",
      "Year": "2011",
      "imdbID": "tt1412386",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwNjkwMDI2NV5BMl5BanBnXkFtZTcwNDc1ODIyNw@@._V1_SX300.jpg"
    },
    {
      "Title": "The Best of Me",
      "Year": "2014",
      "imdbID": "tt1972779",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ5Njg3Njk5N15BMl5BanBnXkFtZTgwODIwODIxMjE@._V1_SX300.jpg"
    },
    {
      "Title": "The Best Years of Our Lives",
      "Year": "1946",
      "imdbID": "tt0036868",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "Best in Show",
      "Year": "2000",
      "imdbID": "tt0218839",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5OTc0NDU1MF5BMl5BanBnXkFtZTYwNzk1OTI3._V1_SX300.jpg"
    },
    {
      "Title": "My Best Friend's Girl",
      "Year": "2008",
      "imdbID": "tt1046163",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDg5NjE3Nl5BMl5BanBnXkFtZTcwNzc4ODQ3MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Second Best Exotic Marigold Hotel",
      "Year": "2015",
      "imdbID": "tt2555736",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU3MjkxNjc0OV5BMl5BanBnXkFtZTgwMjc0NDg0NDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Best of Youth",
      "Year": "2003",
      "imdbID": "tt0346336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTRkOWI1OGYtMDdlNi00MmY2LWFhN2UtMWI1NWEyMTU3ZDI1XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
    },
    {
      "Title": "The Best Man Holiday",
      "Year": "2013",
      "imdbID": "tt2083355",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjU0MTI1MDg5Ml5BMl5BanBnXkFtZTgwNzc2MTMzMDE@._V1_SX300.jpg"
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
