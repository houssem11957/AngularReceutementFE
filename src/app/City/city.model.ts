import { County } from "../Counties/county.model";

export interface City {
}

export class CityDTO{
    constructor(public name: string, public countyID: string[]) {}
   public id:string;
    public Name:string;
  public  countyId:string[];
    
}
export interface CityEditDTO{
    id:string,
    name:string,
    countyId:string[]
}
export interface CitycountyDTO{

    city:CityDTO,
    counties:County[]
}
