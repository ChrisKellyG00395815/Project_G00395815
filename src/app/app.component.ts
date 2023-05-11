import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './movie-service.service';//imported service I created
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  //Attempting to work on an API
  constructor(private movieServ:MovieServiceService, private str:Storage) {}
  movies: any = [];
  favouriteMovie: any = [];
  myStatus:string = "";


  ngOnInit(): void {
    
    this.movieServ.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.movies;
      }
    )
  }

  //This method will save the contents of myStatus into storage
  async onSave() {
    await this.str.create();
    await this.str.set("Status", this.myStatus);
  }
 
}
