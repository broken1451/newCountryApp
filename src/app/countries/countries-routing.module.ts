import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'by-capital',
    loadChildren: () => import('./pages/by-capital-page/by-capital-page.module').then(m => m.ByCapitalPageModule),
  },
  {
    path: 'by-country',
    loadChildren: () => import('./pages/by-country-page/by-country-page.module').then(m => m.ByCountryPageModule),
  },
  {
    path: 'by-region',
    loadChildren: () => import('./pages/by-region-page/by-region-page.module').then(m => m.ByRegionPageModule),
  },
  {
    path: 'by/:id',
    loadChildren: () => import('./pages/country-page/country-page.module').then(m => m.CountryPageModule),
  },
  {
    path: '**', redirectTo: 'by-capital', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
