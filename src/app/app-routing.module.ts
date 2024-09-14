import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { ProjectsComponent } from './projects/components/projects/projects.component';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { FriendsComponent } from './friends/components/friends/friends.component';
import { FilesComponent } from './files/components/files/files.component';
import { PlansComponent } from './plans/components/plans/plans.component';
import { ProfileComponent } from './profile/components/profile/profile.component';

const routes: Routes = [
  {path:"dashboard",title:"Dashboard",component: DashboardComponent},
  {path:"settings",title:"Settgins",component:SettingsComponent},
  {path:"projects",title:"Projects",component:ProjectsComponent},
  {path:"profile",title:"Profile",component:ProfileComponent},
  {path:"courses",title:"Courses",component:CoursesComponent},
  {path:"friends",title:"Friends",component:FriendsComponent},
  {path:"files",title:"Files",component:FilesComponent},
  {path:"plans",title:"Plans",component:PlansComponent},
  {path:"**",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
