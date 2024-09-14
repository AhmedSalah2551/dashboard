import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './components/friends/friends.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    FriendsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FriendsModule { }
