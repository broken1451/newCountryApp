import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent implements OnInit {

  private countrySvc = inject(CountryService);
  public counties: Country[] = [];
  public loading: boolean = false;
  public initialValue: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.counties = this.countrySvc.cacheStore?.byCapital?.countries || [];
    this.initialValue = this.countrySvc.cacheStore?.byCapital?.term || '';
  }

  searchByCapital( event: string) {
    this.loading = true;
    this.countrySvc.getCountriesByCapital(event.toLowerCase()).subscribe({
      next: (countries) => {
        this.counties = countries;
        this.loading = false;
      },
      error: (err) => console.log({err}),
      complete: () => console.log('Complete')
    });
  }
}
