import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add_event.html'
  
})
export class AddEventPage {

  constructor(public navCtrl: NavController) {

  }
    public event = {
    month: '2017-05-11',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

}
