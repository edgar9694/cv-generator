import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cv',
    loadChildren: () => import('./module/cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: '**',
    redirectTo: 'cv',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
