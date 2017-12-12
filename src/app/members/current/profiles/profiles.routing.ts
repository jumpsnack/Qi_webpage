import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from "./profiles.component";
import { SeokheonchoComponent } from "./seokheoncho/seokheoncho.component";
import { JunheeparkComponent } from "./junheepark/junheepark.component";
import { ChangeunparkComponent } from "./changeunpark/changeunpark.component";
import { SangwonkimComponent } from "./sangwonkim/sangwonkim.component";
import { HyunjishinComponent } from "./hyunjishin/hyunjishin.component";
import { HeerochungComponent } from "./heerochung/heerochung.component";

const routes: Routes =[
	{ path: '',             component: ProfilesComponent, children: [
		{ path: 'seokheokcho',       component: SeokheonchoComponent},
		{ path: 'junheepark',       component: JunheeparkComponent},
		{ path: 'changeunpark',       component: ChangeunparkComponent},
		{ path: 'sangwonkim',       component: SangwonkimComponent},
		{ path: 'hyunjishin',       component: HyunjishinComponent},
		{ path: 'heerochung', component: HeerochungComponent }
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
export class ProfilesRoutingModule { }
