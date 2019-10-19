import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesThumbnailComponent } from './movies-thumbnail.component';

describe('MoviesThumbnailComponent', () => {
  let component: MoviesThumbnailComponent;
  let fixture: ComponentFixture<MoviesThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
