import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { ControllComponent } from './components/controll/controll.component';
import { GeneralComponent } from './components/general/general.component';
import { SecurityComponent } from './components/security/security.component';
import { SocialComponent } from './components/social/social.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { BackupComponent } from './components/backup/backup.component';



@NgModule({
  declarations: [
    SettingsComponent,
    ControllComponent,
    GeneralComponent,
    SecurityComponent,
    SocialComponent,
    WidgetsComponent,
    BackupComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
