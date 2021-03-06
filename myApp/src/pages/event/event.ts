
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
  
  JoggenNimmtTeil: boolean;
  FilmabendNimmtTeil: boolean;
  SpaziergangNimmtTeil: boolean;
  SkiNimmtTeil: boolean;
  NewsVisible: boolean;
  
  JoggenBeitretenText: string;
  FilmabendBeitretenText: string;
  SpaziergangBeitretenText: string;
  SkiBeitretenText: string;
  NewsVisibleText: string;
  
  JoggenParams: Object;
  FilmabendParams: Object;
  SpaziergangParams: Object;
  SkiParams: Object;
  
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.NewEvent = AddEventPage;
    this.EventInfo = EventDetailPage;
    this.FilmabendInfo = FilmabendDetailPage;
    this.SpaziergangInfo = SpaziergangDetailPage;
    this.SkiInfo = SkiDetailPage;
    this.navCtrl = navCtrl;
    console.log(this.navCtrl);
    console.log("hier kommt timer");
    this.timer();
	
	this.JoggenNimmtTeil = false;
	this.FilmabendNimmtTeil = false;
	this.SpaziergangNimmtTeil = false;
	this.SkiNimmtTeil = false;
	this.NewsVisible = true;
	
	this.JoggenBeitretenText = "+ Beitreten";
	this.FilmabendBeitretenText = "+ Beitreten";
	this.SpaziergangBeitretenText = "+ Beitreten";
	this.SkiBeitretenText = "+ Beitreten";
	this.NewsVisibleText = "» ausblenden"
	
	this.JoggenParams = {teilnahme: 0};
	this.FilmabendParams = {teilnahme: 0};
	this.SpaziergangParams = {teilnahme: 0};
	this.SkiParams = {teilnahme: 0};
  }

  timer() {
    var timeout = (Math.floor(Math.random() * 25) + 1)*1000;
    setInterval(this.insertNotification, timeout);
  }
  
  insertNotification() {
	let myContainer = <HTMLElement> document.querySelector("#notification_bar");
	var zeitstempel = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
			
	var messages = ['hat sich für Joggen am Donnerstag angemeldet.', 'hat das Event Ski fahren erstellt.', 
					'hat sich vom Filmabend in Berlin abgemeldet.', 'hat das eigene Profil aktualisiert.', 'hat 10 Highscore-Punkte verdient.', 
					'hat 30 Highscore-Punkte verdient.', 'hat das Event Ski fahren bearbeitet.', 'hat einen Kommentar zu Spaziergang bei Sonnenuntergang verfasst.']; 
		
	var names = ['Anna Peters', 'Hans Hänse', 'Frank Schröder', 'Lea Behrens', 'Sonja Baum', 'Horst Schlegel', 'Robert Peters', 
				'Max Bauer', 'Wayne Schlegel', 'Kevin Mayer', 'Dave Hartmann', 'Ruth Schlegel','Eckhard Schiffmann', 'Kay Roberts',
				'Tim Müller', 'Mara Litkowski', 'Christine Korsten', "Thomas Wagels", "Tatjana Würth"];
	var randMsg = messages[Math.floor(Math.random() * messages.length)];
	var randName = names[Math.floor(Math.random() * names.length)];
	var fileName = "img/notif_avatars/" + randName.replace(" ", "%20") + ".jpg";

	var notification = "<ion-item class='item item-block item-ios'> <ion-avatar item-left> <img src='" + fileName + "'> </ion-avatar> <div class='item-inner'> <div class='input-wrapper'> <ion-label class='label label-ios'> <h2>" + randName + "</h2> <h3>" + zeitstempel + "</h3> <p>" + randMsg + "</p> </ion-label> </div> </div> </ion-item>"

	myContainer.innerHTML = notification + myContainer.innerHTML;
	  
	if(myContainer.childElementCount > 10 ){
		myContainer.removeChild(myContainer.lastChild);
	}
  }
  
  JoggenBeitretenClick() {
	if (this.JoggenNimmtTeil == false)
	{
		this.JoggenNimmtTeil = true;
		this.JoggenBeitretenText = '- Abmelden';
		this.JoggenParams = {teilnahme: 1};
	}
	else
	{
		this.JoggenNimmtTeil = false;
		this.JoggenBeitretenText = '+ Beitreten';
		this.JoggenParams = {teilnahme: 0};
	}
  }
  
  FilmabendBeitretenClick() {
	if (this.FilmabendNimmtTeil == false)
	{
		this.FilmabendNimmtTeil = true;
		this.FilmabendBeitretenText = '- Abmelden';
		this.FilmabendParams = {teilnahme: 1};
	}
	else
	{
		this.FilmabendNimmtTeil = false;
		this.FilmabendBeitretenText = '+ Beitreten';
		this.FilmabendParams = {teilnahme: 0};
	}
  }
  
  SpaziergangBeitretenClick() {
	if (this.SpaziergangNimmtTeil == false)
	{
		this.SpaziergangNimmtTeil = true;
		this.SpaziergangBeitretenText = '- Abmelden';
		this.SpaziergangParams = {teilnahme: 1};
	}
	else
	{
		this.SpaziergangNimmtTeil = false;
		this.SpaziergangBeitretenText = '+ Beitreten';
		this.SpaziergangParams = {teilnahme: 0};
	}
  }
  
  SkiBeitretenClick() {
	if (this.SkiNimmtTeil == false)
	{
		this.SkiNimmtTeil = true;
		this.SkiBeitretenText = '- Abmelden';
		this.SkiParams = {teilnahme: 1};
	}
	else
	{
		this.SkiNimmtTeil = false;
		this.SkiBeitretenText = '+ Beitreten';
		this.SkiParams = {teilnahme: 0};
	}
  }  

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

    ToggleNewsVisibility() {
		var x = document.getElementById('news');
		
		if (this.NewsVisible == false)
		{
			this.NewsVisible = true;
			this.NewsVisibleText = '» ausblenden';
			x.style.display = 'block';
			document.getElementById("content").setAttribute("col-lg-9","");
		}
		else
		{
			this.NewsVisible = false;
			this.NewsVisibleText = '« einblenden';
			x.style.display = 'none';
			document.getElementById("content").removeAttribute("col-lg-9");
		}
  }  
}
