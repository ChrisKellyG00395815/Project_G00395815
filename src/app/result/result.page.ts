import { Component, OnInit } from '@angular/core'; //import OnInit is necessary
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
myStatus: string = ""; //declaring myStatus as string
  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    }
    async saveStatus() {
    await this.storage.set('status', this.myStatus) //Set status to chosen option
    .then(
    ()=>{
    this.navCtrl.navigateBack('/home') //Back to home page
    })
    .catch();
    }
}
