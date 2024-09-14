import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FilesComponent } from './components/files/files.component';
import { FilesItemsComponent } from './components/files-items/files-items.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';



@NgModule({
  declarations: [
    FilesComponent,
    FilesItemsComponent,
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FilesModule { }
