import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './contact/contact.component';

import { MembersModule } from "./members/members.module";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    ProjectsComponent,
    PublicationsComponent,
    NoticeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
      MembersModule
  ],
    exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }