import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LenguagesPage } from './lenguages';

@NgModule({
  declarations: [
    LenguagesPage,
  ],
  imports: [
    IonicPageModule.forChild(LenguagesPage),
  ],
})
export class LenguagesPageModule {}
