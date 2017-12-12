import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
