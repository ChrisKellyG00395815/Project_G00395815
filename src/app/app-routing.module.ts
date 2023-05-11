import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'movie-a',
    loadChildren: () => import('./movie-a/movie-a.module').then( m => m.MovieAPageModule)
  },
  {
    path: 'movie-b',
    loadChildren: () => import('./movie-b/movie-b.module').then( m => m.MovieBPageModule)
  },
  {
    path: 'movie-c',
    loadChildren: () => import('./movie-c/movie-c.module').then( m => m.MovieCPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
