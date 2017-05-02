import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddEventPage } from '../add_event/add_event';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = AddEventPage;
  }

}
