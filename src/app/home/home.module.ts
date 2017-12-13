import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';

import { NgxSiemaModule } from 'ngx-siema';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LandingComponent } from './landing/landing.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgxSiemaModule.forRoot(),
    ],
    declarations: [ HomeComponent, LandingComponent ],
    exports:[ HomeComponent ],
    providers: [
    ]
})
export class HomeModule { }
