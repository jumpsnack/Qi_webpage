import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeokheonchoComponent } from "./seokheoncho/seokheoncho.component";
import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from "./profiles.routing";
import { SangwonkimComponent } from './sangwonkim/sangwonkim.component';
import { JunheeparkComponent } from './junheepark/junheepark.component';
import { ChangeunparkComponent } from './changeunpark/changeunpark.component';
import { HyunjishinComponent } from './hyunjishin/hyunjishin.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeerochungComponent } from './heerochung/heerochung.component';

@NgModule({
  imports: [
    CommonModule,
      NgbModule,
      ProfilesRoutingModule
  ],
  declarations: [SeokheonchoComponent, ProfilesComponent, SangwonkimComponent, JunheeparkComponent, ChangeunparkComponent, HyunjishinComponent, HeerochungComponent]
})
export class ProfilesModule { }
