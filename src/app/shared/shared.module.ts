import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatrialModule } from './matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    MatrialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule
  ],
  exports:[
    MatrialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
