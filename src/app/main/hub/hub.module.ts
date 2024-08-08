import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubCardComponent } from './hub-card/hub-card.component';
import { HubComponent } from './hub.component';


@NgModule({
  declarations: [
    HubCardComponent,
    HubComponent
  ],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }
