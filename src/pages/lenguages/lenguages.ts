import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LevelPage } from '../level/level';



/**
 * Generated class for the LenguagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lenguages',
  templateUrl: 'lenguages.html',
})
export class LenguagesPage {





  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenguagesPage');
  }

  openLevelPage(){

    this.navCtrl.push(LevelPage);
  }
 
}
