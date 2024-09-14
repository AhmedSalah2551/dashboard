import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './components/plans/plans.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    PlansComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlansModule { }
