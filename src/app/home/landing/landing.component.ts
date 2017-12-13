import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations'
import { DOCUMENT } from "@angular/common";

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css'],
	animations: [
		trigger('scrollAnimationFromLeft', [
			// state('show', style({
			// 	opacity: 1,
			// 	transform: "translateX(0)"
			// })),
			// state('hide',   style({
			// 	opacity: 0,
			// 	transform: "translateX(-100%)"
			// })),
			// transition('show => hide', animate('700ms ease-out')),
			// transition('hide => show', animate('400ms ease-in'))
		]),
		trigger('scrollAnimationFromRight', [
			// state('show', style({
			// 	opacity: 1,
			// 	transform: "translateX(0)"
			// })),
			// state('hide',   style({
			// 	opacity: 0,
			// 	transform: "translateX(100%)"
			// })),
			// transition('show => hide', animate('700ms ease-out')),
			// transition('hide => show', animate('400ms ease-in'))
		])
	]
})
export class LandingComponent implements OnInit {

	stateFromLeft = 'hide';
	stateFromRight = 'hide';

	constructor(@Inject(DOCUMENT) private document: Document) {
	}

	@HostListener('window:scroll', ['$event'])
	checkScroll(){
		const scrollPosition = window.pageYOffset;

		const firstComponentPosition = this.document.getElementById('anim--from-left').offsetTop
			// + this.document.getElementById('anim--from-left').offsetHeight/3;
		const secondComponentPosition = this.document.getElementById('anim--from-right').offsetTop
			// + this.document.getElementById('anim--from-right').offsetHeight;

		console.dir(this.document.getElementById('anim--from-right'));
		console.log('compo : ' + firstComponentPosition + ', '+ secondComponentPosition+' // scroll : ' + scrollPosition);

		if(scrollPosition >= firstComponentPosition) {
			// this.stateFromLeft = 'show';
			this.document.getElementById('anim--from-left').style.setProperty('animation', 'easein-left 1s');
			this.document.getElementById('anim--back-from-right').style.setProperty('animation', 'easein-right-angle 1s');
		} else {
			// this.stateFromLeft = 'hide';
			this.document.getElementById('anim--from-left').style.setProperty('animation', '');
			this.document.getElementById('anim--back-from-right').style.setProperty('animation', '');
		}

		if(scrollPosition >= secondComponentPosition) {
			// this.stateFromRight = 'show';
			this.document.getElementById('anim--from-right').style.setProperty('animation', 'easein-right 1s');
			this.document.getElementById('anim--back-from-left').style.setProperty('animation', 'easein-left 1s');
		} else {
			// this.stateFromRight = 'hide';
			this.document.getElementById('anim--from-right').style.setProperty('animation', '');
			this.document.getElementById('anim--back-from-left').style.setProperty('animation', '');
		}
	}

	ngOnInit() {
	}

}
