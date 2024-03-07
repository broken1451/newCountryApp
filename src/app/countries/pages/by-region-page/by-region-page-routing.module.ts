import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByRegionPageComponent } from './by-region-page.component';

const routes: Routes = [
  {
    path: '',
    component: ByRegionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByRegionPageRoutingModule { }
