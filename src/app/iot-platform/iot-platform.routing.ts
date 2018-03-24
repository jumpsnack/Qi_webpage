import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IotPlatformComponent } from "./iot-platform.component";
import { BoardComponent } from "./board/board.component";
import { PrevComponent } from "./prev/prev.component";

const routes: Routes =[
	{ path: '',             component: IotPlatformComponent, children: [
		{ path: 'board',       component: BoardComponent},
		{ path: 'prev/:id/:title',     component: PrevComponent },
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
export class IotPlatformRoutingModule { }
