import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-add-event',
  templateUrl: 'add_event.html' 
})

export class AddEventPage {

  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {

  }
    public event = {
    month: '2017-05-18T10:55',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

    //Erstellbestätigung
    showToast(position: string) {
        let toast = this.toastCtrl.create({
            message: 'Event wurde erstellt.',
            duration: 2000,
            position: position
        });

        toast.present(toast);
    }

}
