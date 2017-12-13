import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../news.service";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	sub: any;
	postId: number;

	post: IPost;
	img: string;
	title: string;
	date: string;
	body: string;

	constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) { }

	ngOnInit() {
		this.sub = this.route
			.queryParams
			.subscribe( params => {
				this.postId = +params['postId'] || 0;

				if(this.postId !== undefined && this.postId > 0){
					this.post = this.newsService.getPost(this.postId);

					if(this.post === undefined){
						this.router.navigate(['../']);
					} else {
						this.img = this.post.img;
						this.title = this.post.title;
						this.date = this.post.date;
						this.body = this.post.body;
					}
				}
			})
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}
