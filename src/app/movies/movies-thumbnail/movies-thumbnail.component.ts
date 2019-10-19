import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mn-movies-thumbnail',
  templateUrl: './movies-thumbnail.component.html',
  styleUrls: ['./movies-thumbnail.component.css']
})
export class MoviesThumbnailComponent implements OnInit {

  // favorite: string = "make favorite";
  @Input() movie: any;

  constructor() { }

  ngOnInit() {
  }

}
