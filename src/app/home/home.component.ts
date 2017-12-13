import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	imgags: string[];
	imgIndex = 0;
	@Input() public url: string;

	constructor() {	}

	ngOnInit() {
		// this.imgags = [
		// 	"../../assets/img/daniel-olahh.jpg",
		// 	"../../assets/img/bruno-abatti.jpg",
		// 	"../../assets/img/antoine-barres.jpg",
		// ];
		// this.url = this.imgags[this.imgIndex];
		//
		// setInterval(() => {
		// 	// if(this.imgIndex >= this.imgags.length) this.imgIndex = 0;
		// 	// this.url = this.imgags[this.imgIndex++];
		// }, 5000);

		this.url = 'https://source.unsplash.com/collection/1186428/1024x768';
	}

	options: NgxSiemaOptions = {
		selector: '.siema',
		duration: 2000,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		threshold: 20,
		loop: true,

		onInit: () => {
			// runs immediately after first initialization
		},
		onChange: () => {
			// runs after slide change
		},
	};
}
