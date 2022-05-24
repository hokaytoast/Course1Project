import { Time } from "@angular/common";

export class Meetings{

    mid: number;
    name: string;
    lastname: string;
    email:string;
    company: string;
    time: string;
    date: string;

    constructor( mid: number,
        name: string,
        lastname: string,
        email:string,
        company: string,
        time: string,
        date: string){
            this.mid = mid;
            this.name = name;
            this.lastname = lastname;
            this.email = email;
            this.company = company;
            this.time = time;
            this.date = date;
        }

        showMeetings(){
            console.log(this.mid)
        }
}