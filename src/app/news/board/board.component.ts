import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
test = 'http://www.yeongnam.com/Photo/2016/06/06/L20160606.010190756490001i1.jpg';
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onClickReadMore(postId){
    this.newsService.goToPost(postId);
  }

}
