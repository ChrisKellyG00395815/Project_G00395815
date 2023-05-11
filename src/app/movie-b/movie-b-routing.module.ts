import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieBPage } from './movie-b.page';

const routes: Routes = [
  {
    path: '',
    component: MovieBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieBPageRoutingModule {}
