import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  constructor(public navCtrl: NavController, public storage: Storage) {
    
    /*
    this.storage.set('name','hans');
    this.storage.get('name').then((val) => {
      console.log(val);
    })
*/
     storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Max');

       // Or to get a key/value pair
       storage.get('name').then((val) => {
         console.log('Your name is', val);
       })
     });
  }
  
  //private myName = "";
  //private myName = String(this.storage.get('name'));

}
