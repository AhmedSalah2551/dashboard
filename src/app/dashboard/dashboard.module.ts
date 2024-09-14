import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuickComponent } from './components/quick/quick.component';
import { TargetsComponent } from './components/targets/targets.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { NewsComponent } from './components/news/news.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SearchComponent } from './components/search/search.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { ProjectComponent } from './components/project/project.component';
import { RemindsComponent } from './components/reminds/reminds.component';
import { PostComponent } from './components/post/post.component';
import { MediaComponent } from './components/media/media.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    QuickComponent,
    TargetsComponent,
    TicketsComponent,
    NewsComponent,
    TasksComponent,
    SearchComponent,
    UploadsComponent,
    ProjectComponent,
    RemindsComponent,
    PostComponent,
    MediaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
