import { Country } from "./country.interface";
import { Regions } from "./region.type";

// export interface CacheStore {
//     byCapital: { term: string; countries: Country[]; },
//     byCountries: { term: string; countries: Country[]; },
//     byRegion: { term: string; countries: Country[]; },
// }

export interface CacheStore {
    byCapital?: TermCountries;
    byCountries?: TermCountries,
    byRegion?: RegionCountries,
}

export interface TermCountries {
    term?: string;
    countries?: Country[]
}

export interface RegionCountries {
    region?: Regions | undefined;
    countries?: Country[]
}