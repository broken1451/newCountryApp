import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports: [CountryTableComponent]
})
export class CountriesModule { }
