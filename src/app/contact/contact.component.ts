import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number;
  lng: number;

  constructor() {
    this.lat = 32.882413;
    this.lng = -117.234813;
  }

  ngOnInit() {
  }

}
