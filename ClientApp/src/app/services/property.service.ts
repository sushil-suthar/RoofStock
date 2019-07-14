import { Property } from './../models/property';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) { }
  getProperties(): Observable<Property> {
    let AllProperty: Property[] = [];
    return this.http.get<any>('http://dev1-sample.azurewebsites.net/properties.json')
      .pipe(
        switchMap(res => {
          console.log('In Switch map');
          console.log(res);
          let pr: any[] = res.properties;
          // console.log(pr);
          AllProperty = [];
          pr.forEach(p => {
            AllProperty.push({
              Address: (p.address.address1
                + (p.address.address2 && ', ' + p.address.address2)
                + (p.address.district && ', ' + p.address.district)
                + (p.address.city && ', ' + p.address.city)
                + (p.address.state && ', ' + p.address.state)
                + (p.address.country && ', ' + p.address.country)
                + (p.address.county && ', ' + p.address.county)
                + (p.address.zip && ', ' + p.address.zip)
              )
              ,
              YearBuilt: p.physical && p.physical.yearBuilt,
              ListPrice: p.financial && p.financial.listPrice,
              MonthlyRent: p.financial && p.financial.monthlyRent,
              GrossYield: p.financial
                && (p.financial.monthlyRent * 12) / p.financial.listPrice
            });
          });

          return AllProperty;
        })
      );
  }
  saveProperty(property: Property) {
    return this.http.post('/api/Property', property)
      .pipe(
        map(res => res)
      );
  }
}
