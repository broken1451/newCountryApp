import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './by-capital-page.component';

const routes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByCapitalPageRoutingModule { }
