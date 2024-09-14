import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    CoursesComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
