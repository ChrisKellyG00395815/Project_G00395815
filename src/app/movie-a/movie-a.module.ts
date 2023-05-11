import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieAPageRoutingModule } from './movie-a-routing.module';

import { MovieAPage } from './movie-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieAPageRoutingModule
  ],
  declarations: [MovieAPage]
})
export class MovieAPageModule {}
