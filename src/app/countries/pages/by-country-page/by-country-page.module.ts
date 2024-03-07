import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCountryPageRoutingModule } from './by-country-page-routing.module';
import { ByCountryPageComponent } from './by-country-page.component';
import { CountriesModule } from '../../countries.module';
import { ComponentsModule } from '../../../shared/components/components.module';


@NgModule({
  declarations: [
    ByCountryPageComponent
  ],
  imports: [
    CommonModule,
    ByCountryPageRoutingModule,
    CountriesModule,
    ComponentsModule
  ]
})
export class ByCountryPageModule { }
