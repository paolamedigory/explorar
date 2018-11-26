import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PremiumPage } from '../premium/premium';
import { LevelPage} from '../level/level';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

  openPremiumPage(){

    this.navCtrl.push(PremiumPage);
  }
  
  goBackLevelPage(){
    
    this.navCtrl.setRoot(LevelPage);
      
  }
}
