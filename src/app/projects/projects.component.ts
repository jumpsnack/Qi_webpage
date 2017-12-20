import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
isCollapsed = true;
	isCollapsed2 = true;
  constructor() { }

  ngOnInit() {
  }

}
