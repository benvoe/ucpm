
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
    this.navCtrl = navCtrl;
    console.log(this.navCtrl);
    console.log("hier kommt timer");
    this.timeout();
  }

  timeout(){
    var that = this;
    var timeout = (Math.floor(Math.random() * 10) + 1)*1000;
    
    console.log(timeout);
      setTimeout(function () {
          let myContainer = <HTMLElement> document.querySelector("#notification_bar");
          var zeitstempel = new Date().toLocaleTimeString();
          
		var messages = ['hat sich für Joggen am Donnerstag angemeldet.', 'hat das Event Ski fahren erstellt.', 
					'hat sich vom Filmabend in Berlin abgemeldet.', 'hat ihr Profil aktualisiert.', 'hat 10 Highscore-Punkte verdient.', 
					'hat 30 Highscore-Punkte verdient.', 'hat das Event Ski fahren bearbeitet', 'hat einen Kommentar zu Spaziergang bei Sonnenuntergang verfasst.']; 
		
		var names = ['Anna Peters', 'Hans Hänse', 'Frank Schröder', 'Lea Behrens', 'Sonja Baum', 'Horst Schlegel', 'Robert Peters', 
				'Max Bauer', 'Wayne Schlegel', 'Kevin Mayer', 'Dave Hartmann', 'Ruth Schlegel','Eckhard Schiffmann', 'Kay Roberts', 'Tim Müller', 'Mara Likowski'];
				
		var randMsg = messages[Math.floor(Math.random() * messages.length)];
		var randName = names[Math.floor(Math.random() * names.length)];
		
          var notification = "<ion-item class='item item-block item-ios'> <ion-avatar item-left> <img src='img/avatar.png'> </ion-avatar> <div class='item-inner'> <div class='input-wrapper'> <ion-label class='label label-ios'> <h2>" + zeitstempel + "</h2> <h3>" + randName + "</h3> <p>" + randMsg + "</p> </ion-label> </div> </div> </ion-item>"

          myContainer.innerHTML = notification + myContainer.innerHTML;
          
          if(myContainer.childElementCount > 10 ){
            myContainer.removeChild(myContainer.lastChild);
          }
          
          that.timeout();
      }, timeout);
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
