import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvHeaderComponent } from './cv-header.component';

const routes: Routes = [
  {
    path: '',
    component: CvHeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvHeaderRoutingModule {}
