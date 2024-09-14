import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';
import { PlansModule } from './plans/plans.module';
import { FriendsModule } from './friends/friends.module';
import { CoursesModule } from './courses/courses.module';
import { ProjectsModule } from './projects/projects.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FilesModule } from './files/files.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SettingsModule,
    PlansModule,
    FriendsModule,
    PlansModule,
    DashboardModule,
    CoursesModule,
    ProjectsModule,
    ProfileModule,
    FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
