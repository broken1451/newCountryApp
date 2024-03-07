import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageRoutingModule } from './by-capital-page-routing.module';
import { ByCapitalPageComponent } from './by-capital-page.component';
import { ComponentsModule } from '../../../shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesModule } from '../../countries.module';


@NgModule({
  declarations: [ByCapitalPageComponent],
  imports: [
    CommonModule,
    ByCapitalPageRoutingModule, 
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    CountriesModule
  ]
})
export class ByCapitalPageModule { }
