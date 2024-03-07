import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, delay, map, of, take, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.inteface';
import { Regions } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countrySvc = inject(HttpClient)
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private http: HttpClient) { 
    this.loadStorage();
  }


  getCountriesByCapital(term: string): Observable<Country[]> {
    return this.countrySvc.get<Country[]>(`${environment.apiUrl}/capital/${term}`).pipe(
      take(1),
        tap((countries) => {
          this.cacheStore.byCapital = { term, countries };
        }),
        tap(() => {
          this.saveStorage();
        }),
      // delay(2000),
      catchError(err => {
        return of([]);
      })
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.countrySvc.get<Country[]>(`${environment.apiUrl}/name/${term}`).pipe(
      take(1),
      tap((countries) => {
        this.cacheStore.byCountries = { term, countries };
      }),
      tap(() => {
        this.saveStorage();
      }),
      // delay(2000),
      catchError(err => {
        return of([]);
      })
    );
  }

  serachRegion(region: Regions): Observable<Country[]> {
    return this.countrySvc.get<Country[]>(`${environment.apiUrl}/region/${region}`).pipe(
      take(1),
      tap((countries) => {
        this.cacheStore.byRegion = { region, countries };
      }),
      tap(() => {
        this.saveStorage();
      }),
      // delay(2000),
      catchError(err => {
        return of([]);
      })
    );
  }

  serachByCode(code: string): Observable<Country | null> {
    return this.countrySvc.get<Country[]>(`${environment.apiUrl}/alpha/${code}`).pipe(
      take(1),
      delay(2000),
      map((country) => country.length > 0 ? country[0] : null),
      catchError(err => {
        return of(null);
      })
    );
  }

  private saveStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadStorage(){
    if(localStorage.getItem('cacheStore')){
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }
}
