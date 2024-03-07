import { Component, Input, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent implements OnInit  {

  @Input({required: true}) countries!: Country[];
  private routerSvc = inject(Router);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto( country:Country ){
    this.routerSvc.navigate(['/countries/by', country.cca3]);
  }

}
