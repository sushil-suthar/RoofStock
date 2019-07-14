import { Property } from './../models/property';
import { PropertyService } from './../services/property.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  AllProperties: Property[] = [];

  property: {};
  constructor(private propertyService: PropertyService) {

  }
  ngOnInit(): void {
    this.propertyService.getProperties()
      .subscribe(p => {
        this.AllProperties.push(p);
        // console.log(this.AllProperties);
      });

  }
  onSave(SelectedProperty: Property) {
    console.log('OnSave');
    console.log(SelectedProperty);
    this.propertyService.saveProperty(SelectedProperty).subscribe(result => {
      console.log(result);
      if (result['propertyId']) {
        alert('Property saved in database with Id=' + result['propertyId']);
      }

      console.log(result);


    });
  }

}
