import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-event',
  templateUrl: 'eventdetails.html'
})
export class EventDetailPage {

  pushPage: any;
  teilnehmer: number;
  nimmtTeil: boolean;
  beitreten: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
	if (this.navParams.get('teilnahme') == 0)
	{
		this.teilnehmer = 0;
		this.nimmtTeil = false;
		this.beitreten = '+ Beitreten';
	}
	else
	{
		this.teilnehmer = 1;
		this.nimmtTeil = true;
		this.beitreten = '- Abmelden';
	}
  }
  
  ButtonBeitreten_Click(){
	if (this.nimmtTeil == false)
	{
		this.teilnehmer += 1;
		this.nimmtTeil = true;
		this.beitreten = '- Abmelden';
	}
	else
	{
		this.teilnehmer -= 1;
		this.nimmtTeil = false;
		this.beitreten = '+ Beitreten';
		}
  }

  //Bestätigung Kommentar
  showToast(position: string) {
      let toast = this.toastCtrl.create({
          message: "Kommentar wurde hinzugefuegt.",
          duration: 2000,
          position: position,
      });

      //let anordnung: string='abstand';
      toast.present(toast);
  }
  
}
