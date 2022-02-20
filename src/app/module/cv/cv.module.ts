import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { CvContentModule } from './cv-content/cv-content.module';
import { CvHeaderModule } from './cv-header/cv-header.module';
import { CvSidebarModule } from './cv-sidebar/cv-sidebar.module';

@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    CvContentModule,
    CvHeaderModule,
    CvSidebarModule,
  ],
})
export class CvModule {}
