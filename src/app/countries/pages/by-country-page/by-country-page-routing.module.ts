import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryPageComponent } from './by-country-page.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByCountryPageRoutingModule { }
