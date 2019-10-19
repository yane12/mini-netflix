import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class MovieService {


    // private searchWord: string = "s=man";
    private movieUrl = "/api/movies/movies.json";
    // private movieUrl = "http://www.omdbapi.com/?apikey=9fbd6f5e&" + this.searchWord;// s=man";

    errorMessage: string;
    movies: any;

    constructor(private http: HttpClient) { }

    // setSeachWord(word: string): void {
    // this.searchWord = word;
    // }

    // getSearchWord(): string {
    // return this.searchWord; js
    // }

    getMovies(): any {
        this.resolve();
        return this.movies;
    }

    httpMovies(movieUrl: string): Observable<any[]> {
        return this.http.get<any[]>(movieUrl).pipe(
            tap(data => console.log('all: ' + JSON.stringify(data))),
            catchError(this.handleError));
    }

    resolve(): any {
        this.httpMovies(this.movieUrl).subscribe({
            next: movies => {
                // this.movies = movies["Search"];
                this.movies = movies;
                console.log(this.movies);
            },
            error: err => this.errorMessage = err
        });
    }


    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    getMovie(id: string): any {
        // this.searchWord = 'i=' + id;
        // this.movieUrl = "http://www.omdbapi.com/?apikey=9fbd6f5e&" + this.searchWord;

        // this.httpMovies(this.movieUrl).subscribe({
        //     next: movies => {
        //         this.movies = movies;
        //         console.log(this.movies);
        //     },
        //     error: err => this.errorMessage = err
        // });

        // return this.movies;
        return this.movies.find(movie => id == movie.imdbID)
    }

}