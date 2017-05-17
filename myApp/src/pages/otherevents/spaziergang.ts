
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-event',
  templateUrl: 'spaziergang.html'
})
export class SpaziergangDetailPage {

  pushPage: any;
  teilnehmer: number;
  nimmtTeil: boolean;
  beitreten: string;
  
  constructor(public navCtrl: NavController) {
	this.teilnehmer = 0;
	this.nimmtTeil = false;
	this.beitreten = 'Beitreten';
  }
  
  ButtonBeitreten_Click(){
	if (this.nimmtTeil == false)
	{
		this.teilnehmer += 1;
		this.nimmtTeil = true;
		this.beitreten = 'Abmelden';
	}
	else
	{
		this.teilnehmer -= 1;
		this.nimmtTeil = false;
		this.beitreten = 'Beitreten';
		}
  }
  
}
