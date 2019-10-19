import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesThumbnailComponent } from './movies/movies-thumbnail/movies-thumbnail.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { FavoriteMoviesComponent } from './movies/favorite-movies/favorite-movies.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
// import { MovieService } from './movies/shared/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    // MovieService,
    MoviesListComponent,
    MoviesThumbnailComponent,
    MovieDetailComponent,
    FavoriteMoviesComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MoviesListComponent },
      { path: 'movies', component: MoviesListComponent },
      { path: 'movies/:id', component: MovieDetailComponent },
      { path: 'favorites', component: FavoriteMoviesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
