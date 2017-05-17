
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';
import { AddEventPage } from '../pages/add_event/add_event';
import { EventDetailPage } from '../pages/eventdetails/eventdetails';
// weitere statische Detailseiten
import { FilmabendDetailPage } from '../pages/otherevents/filmabend';
import { SkiDetailPage } from '../pages/otherevents/ski';
import { SpaziergangDetailPage } from '../pages/otherevents/spaziergang';
// Ende Detailseiten
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    EventPage,
    AddEventPage,
    EventDetailPage,
    FilmabendDetailPage,
    SpaziergangDetailPage,
    SkiDetailPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    EventPage,
    AddEventPage,
    EventDetailPage,
    FilmabendDetailPage,
    SpaziergangDetailPage,
    SkiDetailPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}