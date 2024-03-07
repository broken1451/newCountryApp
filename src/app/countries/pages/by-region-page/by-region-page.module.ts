import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByRegionPageRoutingModule } from './by-region-page-routing.module';
import { ByRegionPageComponent } from './by-region-page.component';
import { CountriesModule } from '../../countries.module';
import { ComponentsModule } from '../../../shared/components/components.module';


@NgModule({
  declarations: [
    ByRegionPageComponent
  ],
  imports: [
    CommonModule,
    ByRegionPageRoutingModule,
    CountriesModule,
    ComponentsModule
  ]
})
export class ByRegionPageModule { }
