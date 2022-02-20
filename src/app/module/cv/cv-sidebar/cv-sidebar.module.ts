import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvSidebarRoutingModule } from './cv-sidebar-routing.module';
import { CvSidebarComponent } from './cv-sidebar.component';
import { CvSSkillLevelComponent } from './cv-s-skill-level/cv-s-skill-level.component';
import { CvSResumeComponent } from './cv-s-resume/cv-s-resume.component';
import { CvSContactComponent } from './cv-s-contact/cv-s-contact.component';

@NgModule({
  declarations: [
    CvSidebarComponent,
    CvSSkillLevelComponent,
    CvSResumeComponent,
    CvSContactComponent,
  ],
  imports: [CommonModule, CvSidebarRoutingModule],
  exports: [
    CvSidebarComponent,
    CvSSkillLevelComponent,
    CvSResumeComponent,
    CvSContactComponent,
  ],
})
export class CvSidebarModule {}
