import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent implements OnInit  {

  private countrySvc = inject(CountryService);
  public counties: Country[] = [];
  public initialValue: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.counties = this.countrySvc.cacheStore?.byCountries?.countries || [];
    this.initialValue = this.countrySvc.cacheStore?.byCountries?.term || '';
  }

  searchByName( event: string) {
    this.countrySvc.searchCountry(event.toLowerCase()).subscribe({
      next: (countries) => {
        this.counties = countries;
      },
      error: (err) => console.log({err}),
      complete: () => console.log('Complete')
    });
  }
}
