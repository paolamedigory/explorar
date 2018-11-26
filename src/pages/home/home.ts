import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LenguagesPage } from '../lenguages/lenguages';
import { ProgressPage } from '../progress/progress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goLenguagesPage(){
    this.navCtrl.push(LenguagesPage);
  }

  goProgressPage(){
    
    this.navCtrl.push(ProgressPage);
  }


}
