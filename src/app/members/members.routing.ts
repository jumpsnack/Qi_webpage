import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from "./members.component";
import { CurrentComponent } from "./current/current.component";
import { PastComponent } from "./past/past.component";
import { SeokheonchoComponent } from "./current/profiles/seokheoncho/seokheoncho.component";


const routes: Routes =[
	{ path: '',             component: MembersComponent, children: [
		{ path: '',       component: CurrentComponent},
		{ path: 'profiles', loadChildren: 'app/members/current/profiles/profiles.module#ProfilesModule' },
		// { path: 'past',       component: PastComponent },
		// { path: '',         redirectTo: 'current',      pathMatch: 'full' }
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
export class MembersRoutingModule { }
