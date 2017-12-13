import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from "./news.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NewsRoutingModule } from "./news.routing";
import { NewsService } from "./news.service";

@NgModule({
  imports: [
    CommonModule,
      NgbModule,
      NewsRoutingModule
  ],
  declarations: [NewsComponent, BoardComponent, PostComponent],
    providers: [NewsService]
})
export class NewsModule { }
