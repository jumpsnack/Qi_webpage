import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from "./members.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MembersRoutingModule } from "./members.routing";
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';

@NgModule({
  imports: [
    CommonModule,
      NgbModule,
      MembersRoutingModule
  ],
  declarations: [MembersComponent, CurrentComponent, PastComponent]
})
export class MembersModule { }
