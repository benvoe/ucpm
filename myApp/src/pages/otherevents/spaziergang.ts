import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event',
  templateUrl: 'spaziergang.html'
})
export class SpaziergangDetailPage {

  pushPage: any;
  teilnehmer: number;
  nimmtTeil: boolean;
  beitreten: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  
}
