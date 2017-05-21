import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'highscore.html'
})


export class HighscorePage {
  
  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }
  
 
  
}
