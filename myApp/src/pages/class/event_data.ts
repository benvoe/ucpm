import { Storage } from '@ionic/storage';
import { EventList } from './event_list';

export class EventData {
    
    private _id : number;
    private _title : string;
    private _description : string;
    private _attendances : number;

    public constructor( public storage : Storage ){
        
    }

    setID(id:number){
        console.log("Setze ID", id);
        this._id = id;
    }

    getID(){
        return this._id;
    }
    
    setTitle(title: string){
        console.log("Setze Titel", title);
        this._title = title;
    }
    
    getTitle(){
        return this._title;
    }

    setDescription(description: string){
        console.log("Setze Beschreibung: ", description);
        this._description = description;
    }

    getDescription(){
        return this._description;
    }

    setAttendances(attendances: number){
        console.log("Setze Teilnehmehrzahl", attendances);
        this._attendances = attendances;
    }

    getAttendances(){
        return this._attendances;
    }

    incAttendances(){
        this._attendances++;
    }

    decAttendances(){
        this._attendances--;
    }

    load(id:number){
        let event_list = new EventList(this.storage);
        setTimeout(function(){
            if(true){
            console.log("Die ID existiert und kann geladen werden.")
            this._id = id;
            this._title = event_list.getElement(id).getTitle();
            this._description = event_list.getElement(id).getDescription();
            this._attendances = event_list.getElement(id).getAttendances();
        }

        },3000);
    }

    save(){
        let event_list = new EventList(this.storage);

        event_list.setElement(this._id, this);
    }

    add(){
        let event_list = new EventList(this.storage);

        this._id = event_list.addElement(this);

        event_list.getElement(this._id).log();
    }

    update(){
        let event_list = new EventList(this.storage);

        event_list.setElement(this._id, this);
    }

    delete(){
        let event_list = new EventList(this.storage);

        event_list.delElement(this._id);
    }

    log(){
        console.log("Titel: ", this._title);
        console.log("Beschreibung: ", this._description);
        console.log("Teilnahmezahl: ", this._attendances);
    }

    printList(){
        let event_list = new EventList(this.storage);

        console.log(event_list.toString());
    }

    test(test:number){
        let event_list = new EventList(this.storage);

        event_list.testStorage(test);
    }




}