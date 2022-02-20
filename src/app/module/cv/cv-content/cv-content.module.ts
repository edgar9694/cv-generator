import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvContentRoutingModule } from './cv-content-routing.module';
import { CvContentComponent } from './cv-content.component';
import { CvCJobPostComponent } from './cv-c-job-post/cv-c-job-post.component';
import { CvCSkillPostComponent } from './cv-c-skill-post/cv-c-skill-post.component';

@NgModule({
  declarations: [CvContentComponent, CvCJobPostComponent, CvCSkillPostComponent],
  imports: [CommonModule, CvContentRoutingModule],
  exports: [CvContentComponent],
})
export class CvContentModule {}
