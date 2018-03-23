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
// import { NewsComponent } from './news/news.component';
import { ProjectComponent } from './project/project.component';
import { PublicationsComponent } from './publications/publications.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { ContactComponent } from './contact/contact.component';

import { MembersModule } from "./members/members.module";
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    // NewsComponent,
    ProjectComponent,
    PublicationsComponent,
    PrototypeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
      MembersModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyC8yg_gowVFOd_aIfPt4lYkGurpwbEoRbA'
      })
  ],
    exports: [NgbModule],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
