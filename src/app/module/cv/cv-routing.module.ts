import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv.component';

const routes: Routes = [
  {
    path: 'view',
    component: CvComponent,
  },
  {
    path: '**',
    redirectTo: 'view',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
