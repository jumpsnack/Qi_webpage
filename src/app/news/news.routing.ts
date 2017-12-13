import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from "./news.component";
import { BoardComponent } from "./board/board.component";
import { PostComponent } from "./post/post.component";


const routes: Routes =[
	{ path: '',             component: NewsComponent, children: [
		{ path: 'board',       component: BoardComponent},
		{ path: 'post',     component: PostComponent },
		//{ path: 'profiles', loadChildren: 'app/members/current/profiles/profiles.module#ProfilesModule' },
		// { path: 'past',       component: PastComponent },
		{ path: '',         redirectTo: 'board',      pathMatch: 'full' }
	] },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
})
export class NewsRoutingModule { }
