import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfieComponent } from './components/selfie/selfie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SelfieComponent],
  imports: [CommonModule],
  exports: [SelfieComponent, FontAwesomeModule],
})
export class SharedModule {}
