import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieBPageRoutingModule } from './movie-b-routing.module';

import { MovieBPage } from './movie-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieBPageRoutingModule
  ],
  declarations: [MovieBPage]
})
export class MovieBPageModule {}
