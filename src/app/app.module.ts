import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LenguagesPage } from'../pages/lenguages/lenguages';
import { LevelPage }  from'../pages/level/level';
import { CoursePage } from'../pages/course/course';
import { ProgressPage } from'../pages/progress/progress';
import { PremiumPage }  from'../pages/premium/premium';
import { LoginPage } from'../pages/login/login';
import { ListPage }  from'../pages/list/list';






import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LenguagesPage,
    LevelPage,
    CoursePage ,
    ProgressPage,
    PremiumPage,
    LoginPage,
    ListPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LenguagesPage,
    LevelPage,
    CoursePage,
    ProgressPage,
    PremiumPage,
    LoginPage,
    ListPage,
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
