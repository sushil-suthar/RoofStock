import { PropertyService } from './../services/property.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  properties = [];
  constructor(private propertyService: PropertyService) {
    propertyService.getProperties().subscribe(result => {
      this.properties = result;
      console.log(this.properties);
    });
  }
}
