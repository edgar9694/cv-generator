import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvHeaderComponent } from './cv-header.component';
import { CvHSelfieComponent } from './cv-h-selfie/cv-h-selfie.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CvHeaderRoutingModule } from './cv-header-routing.module';
import { CvHContactInfoEditComponent } from './cv-h-contact-info/cv-h-contact-info-edit/cv-h-contact-info-edit.component';
import { CvHContactInfoViewComponent } from './cv-h-contact-info/cv-h-contact-info-view/cv-h-contact-info-view.component';
import { CvHContactInfoComponent } from './cv-h-contact-info/cv-h-contact-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CvHeaderComponent,
    CvHSelfieComponent,
    CvHContactInfoComponent,
    CvHContactInfoViewComponent,
    CvHContactInfoEditComponent,
  ],
  imports: [
    CommonModule,
    CvHeaderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CvHeaderComponent, CvHSelfieComponent, CvHeaderRoutingModule],
})
export class CvHeaderModule {}
