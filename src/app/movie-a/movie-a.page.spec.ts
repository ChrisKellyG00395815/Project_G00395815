import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieAPage } from './movie-a.page';

describe('MovieAPage', () => {
  let component: MovieAPage;
  let fixture: ComponentFixture<MovieAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
