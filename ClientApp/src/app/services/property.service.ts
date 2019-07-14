import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) { }
  getProperties() {
    return this.http.get<any[]>('http://dev1-sample.azurewebsites.net/properties.json')
      .pipe(
        map(res => res)
      );
  }
}
