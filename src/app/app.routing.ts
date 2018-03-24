import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AboutComponent } from "./about/about.component";
import { NewsComponent } from "./news/news.component";
import { ProjectComponent } from "./project/project.component";
import { PublicationsComponent } from "./publications/publications.component";
import { MembersComponent } from "./members/members.component";
import { PrototypeComponent } from "./prototype/prototype.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
	{ path: 'about',             component: AboutComponent },
	// { path: 'news',             component: NewsComponent },
	{ path: 'news',             loadChildren: 'app/news/news.module#NewsModule' },
	{ path: 'project',             component: ProjectComponent },
	{ path: 'publications',             component: PublicationsComponent },
	{ path: 'members',             loadChildren: 'app/members/members.module#MembersModule' },
	{ path: 'prototype',             component: PrototypeComponent },
	{ path: 'iot-platform',         loadChildren: 'app/iot-platform/iot-platform.module#IotPlatformModule' },
	{ path: 'contact',             component: ContactComponent },

    { path: 'user-profiles',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
