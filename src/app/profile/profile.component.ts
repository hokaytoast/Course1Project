import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = "NA";
  lastname: string = "NA";
  email: string = "NA";
  company: string = "NA";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.name = params['name'];
      this.lastname = params['lastname'];
      this.email = params['email'];
      this.company = params['company'];
    })
  }

}
