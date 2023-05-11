import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCPage } from './movie-c.page';

describe('MovieCPage', () => {
  let component: MovieCPage;
  let fixture: ComponentFixture<MovieCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
