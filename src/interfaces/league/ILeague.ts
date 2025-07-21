import { ICountry } from "./ICountry";

export interface ILeague {
  id: number;
  name: string;
  season: string;
  logo: string;
  country: ICountry;
}
