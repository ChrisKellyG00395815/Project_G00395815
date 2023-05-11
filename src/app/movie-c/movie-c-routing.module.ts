import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCPage } from './movie-c.page';

const routes: Routes = [
  {
    path: '',
    component: MovieCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieCPageRoutingModule {}
