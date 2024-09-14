import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './components/info/info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ActivitiesComponent } from './components/activities/activities.component';



@NgModule({
  declarations: [
    ProfileComponent,
    InfoComponent,
    SkillsComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }
