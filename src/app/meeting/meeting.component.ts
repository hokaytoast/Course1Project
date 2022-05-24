import { Component, OnInit } from '@angular/core';
import { Meetings } from '../modal/meetings';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetings: Meetings[] = [
    new Meetings(101, "Andrew", "Chen", "chenandrew200@gmail.com", "We Love Architecture", "7:00AM", "5/9/2022" ),
    new Meetings(102, "Joe", "Chang", "changjoe@gmail.com", "RocketArchitecture", "9:00AM", "5/10/2022" ),
    new Meetings(103, "William", "Craig", "craigwilliam@gmail.com", "Craig's Buildings", "5:00PM", "5/10/2022" ),
    new Meetings(104, "John", "Watson", "watsonjohn@gmail.com", "Architecture Plus", "4:00PM", "5/11/2022" ),
    new Meetings(105, "Tony", "Lazo", "lazotony@gmail.com", "Lazo's Materials", "10:00AM", "5/11/2022" )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
