import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Observable, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
})
export class CountryPageComponent implements OnInit {

  private ActivateRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private countrySvc = inject(CountryService);
  public country!: Country;
  public object: {} = {};

  getTranslations() {
    return Object.entries(this.object);
  }

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { 

  }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({id}) => this.getCountryByCode(id))
    ).subscribe({
      next: (country) => {
        if(!country ){
          this.router.navigate(['/countries']);
          return;
        }
        this.country = country;
        this.object = country.translations
      },
      error: (err) => console.log({err}),
      complete: () => console.log('Complete')
    });
  }

  getCountryByCode( code: string): Observable<Country | null> {
    return this.countrySvc.serachByCode(code);
  }

}
