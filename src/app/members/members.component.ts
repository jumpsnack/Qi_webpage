import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTabChanged(event: NgbTabChangeEvent){
    if(event.nextId === 'current'){
      this.router.navigateByUrl('members');
    }
  }

  onSelected(event: Event){
    alert('hhh')
  }

	onDeactivate(){
	  window.scrollTo(0, 0);
  }

}
