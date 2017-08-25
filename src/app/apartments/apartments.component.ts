import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement/advertisement.service';
import { Advertisement } from '../advertisement/advertisement';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  advertisements: FirebaseListObservable<Advertisement[]>;

  constructor(private advSvc: AdvertisementService) { }

  ngOnInit() {
    this.advertisements = this.advSvc.getAdvertisementsList
    ({
      orderByChild: 'propertyType',
      equalTo: 'Apartment'
    });
  }

}
