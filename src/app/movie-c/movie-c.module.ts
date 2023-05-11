import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieCPageRoutingModule } from './movie-c-routing.module';

import { MovieCPage } from './movie-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieCPageRoutingModule
  ],
  declarations: [MovieCPage]
})
export class MovieCPageModule {}
