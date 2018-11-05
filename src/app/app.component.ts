import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// PAGINAS QUE QUIERO QUE APAREZCAN EN MI MENU 

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LenguagesPage } from'../pages/lenguages/lenguages';
import { LevelPage }  from'../pages/level/level';
import { ProgressPage } from'../pages/progress/progress';
import { PremiumPage }  from'../pages/premium/premium';
import { LoginPage } from'../pages/login/login';
import { CoursePage } from'../pages/course/course';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    //  aqui poner las paginas que quiero que se reflejen en mi menu 

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Lenguages', component: LenguagesPage},
      { title: 'Progress', component: ProgressPage},
      { title: 'Premium', component: PremiumPage},
      { title: 'Login', component: LoginPage},
      { title: 'Course', component: CoursePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
