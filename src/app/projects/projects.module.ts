import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
