import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { Regions } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent implements OnInit{

  private countrySvc = inject(CountryService);
  public counties: Country[] = [];
  public regions: Regions[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] 
  public selectedRegion!: Regions;


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.counties = this.countrySvc.cacheStore?.byRegion?.countries || [];
    this.selectedRegion = this.countrySvc.cacheStore?.byRegion?.region || '';
  }

  searchByRegion(event: Regions) {
    this.selectedRegion = event;
    this.countrySvc.serachRegion(event).subscribe({
      next: (countries) => {
        this.counties = countries;
      },
      error: (err) => console.log({err}),
      complete: () => console.log('Complete')
    });
  }

}
