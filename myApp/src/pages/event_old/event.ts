import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AddEventPage } from '../add_event/add_event';
import { EventDetailPage } from '../eventdetails/eventdetails';
// quick and dirty weitere Detailseiten. Wenn du weisst, wie das auch dynamisch geht
// dann kannst du das gerne machen :-)
import { FilmabendDetailPage } from '../otherevents/filmabend';
//import { EventDetailPage } from '../eventdetails/eventdetails';
//import { EventDetailPage } from '../eventdetails/eventdetails';
// Ende 
import { EventData } from '../class/event_data';
import { EventList } from '../class/event_list';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  NewEvent: any;
  EventInfo: any;
  // fuer statische Detailseiten
  FilmabendInfo: any;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.NewEvent = AddEventPage;
    this.EventInfo = EventDetailPage;
    // weitere statische Detailseiten
    this.FilmabendInfo = FilmabendDetailPage;
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
