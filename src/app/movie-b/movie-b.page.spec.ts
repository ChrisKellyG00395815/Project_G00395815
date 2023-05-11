import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieBPage } from './movie-b.page';

describe('MovieBPage', () => {
  let component: MovieBPage;
  let fixture: ComponentFixture<MovieBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
