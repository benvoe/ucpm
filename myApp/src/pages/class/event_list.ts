import { Storage } from '@ionic/storage';
import { EventData as Event } from './event_data';


export class EventList {

    _events: Event[];

    constructor( public storage : Storage ){
        this._events = new Array<Event>();

        this.storage.ready().then(()=>{
            this.storage.get('events').then((events) => {
            if(events){
                console.log("Events gefunden");
                console.log(events.toString());
                this._events = events;
            }
            else{
                console.log("Events nicht gefunden");
                this.storage.set('events', this._events);
            }
        })
        })
    }

    getElement(id:number){
        console.log("Lade Element");
        this.load();
        console.log("Element geladen");
        return this._events[id];
    }

    setElement(id:number,event:Event){
        this.load();
        this._events[id] = event;
        this.save();
    }

    addElement(event:Event){
        this.load();
        let id: number = this._events.push(event) - 1;
        this._events[id].setID(id);
        this.save();
        return id;
    }

    delElement(id:number){
        this.load();
        for (var index = id; index < this._events.length - 1 ; index++) {
            this._events[index] = this._events[index + 1];
        }
        this._events.pop();
        this.save();
    }

    checkElement(id:number){
        this.load();
        return this._events[id] != null;
    }

    private load(){
        this.storage.ready().then(() => {
            this.storage.get('events').then((events) => {
                console.log("load() JSON:\n",events);
                this._events = JSON.parse(events);
            })
        })
    }

    private save(){
        console.log("save() JSON:\n",JSON.stringify(this._events));
        this.storage.set('events', JSON.stringify(this._events));
    }

    testStorage(testNumber:number){
        console.log("Bin im Test mit Nummer ", testNumber);
        this.storage.set('test', testNumber);

        this.storage.get('test').then((test) => {
            console.log("Testerfolg: ", test);
        })
    }

    toString(){
        return this._events.toString();
    }

}