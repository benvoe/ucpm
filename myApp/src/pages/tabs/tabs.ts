import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { HighscorePage } from '../highscore/highscore';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab1Root = EventPage;
  tab2Root = ProfilePage;
  tab3Root = HighscorePage;

  constructor() {

  }
}
