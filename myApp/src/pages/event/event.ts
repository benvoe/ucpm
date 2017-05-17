import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AddEventPage } from '../add_event/add_event';
import { EventDetailPage } from '../eventdetails/eventdetails';
// weitere statische Detailseiten
import { FilmabendDetailPage } from '../otherevents/filmabend';
import { SpaziergangDetailPage } from '../otherevents/spaziergang';
import { SkiDetailPage } from '../otherevents/ski';
// Ende Detailseiten
import { EventData } from '../class/event_data';
import { EventList } from '../class/event_list';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  NewEvent: any;
  EventInfo: any;
  FilmabendInfo: any;
  SpaziergangInfo: any;
  SkiInfo: any;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.NewEvent = AddEventPage;
    this.EventInfo = EventDetailPage;
    this.FilmabendInfo = FilmabendDetailPage;
    this.SpaziergangInfo = SpaziergangDetailPage;
    this.SkiInfo = SkiDetailPage;
  }

  _clickMich(){}

  clickMich(){
    console.log("clickMich gedrückt ...")
    let evnt1: EventData = new EventData(this.storage);
    let evnt2: EventData = new EventData(this.storage);

    let evntlist: EventList = new EventList(this.storage);
    evntlist.testStorage(55);

    this.storage.set('hanswurst', '6');
    this.storage.get('hanswurst').then((vario) => {
      console.log("Hier ist Vario: ", vario);
    })

    evnt1.setTitle( "Mein viertes Event" );
    evnt1.setDescription( "Ich habe ein Event erstellt." );
    evnt1.setAttendances( 444 );

    evnt1.printList();
    evnt1.test(120);

    evnt1.add();

    evnt1.printList();

    evnt2.load( 0 );

    evnt2.log();

    console.log(evnt2.getID());
    console.log(evnt2.getTitle());
    console.log(evnt2.getDescription());
    console.log(evnt2.getAttendances());
  }

}
