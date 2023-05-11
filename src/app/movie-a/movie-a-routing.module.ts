import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieAPage } from './movie-a.page';

const routes: Routes = [
  {
    path: '',
    component: MovieAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieAPageRoutingModule {}
