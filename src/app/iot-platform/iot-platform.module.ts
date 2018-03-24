import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IotPlatformComponent } from './iot-platform.component';
import { BoardComponent } from './board/board.component';
import { IotPlatformRoutingModule } from "./iot-platform.routing";
import { PrevComponent } from './prev/prev.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
      IotPlatformRoutingModule,
      HttpClientModule
  ],
  declarations: [IotPlatformComponent, BoardComponent, PrevComponent]
})
export class IotPlatformModule { }
