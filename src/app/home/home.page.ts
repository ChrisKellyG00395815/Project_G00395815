import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser'; //Browser plugin
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
stories:any[]=[];
  myStatus!: string;
  constructor(private storage: Storage) {}
  
  ngOnInit(){

  }

  //fetching data
  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    }
    
  //Opens a browser window
  async openBrowser(){
    await Browser.open({url: 'http://capacitorjs.com/'});
  }
}
