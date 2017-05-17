import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

         storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Sonja');
       storage.set('location', 'Berlin');
       storage.set('team', 'Captain Blaubär');

       // Or to get a key/value pair
       storage.get('age').then((val) => {
         console.log('Your age is', val);
       })
     });
  }
}
