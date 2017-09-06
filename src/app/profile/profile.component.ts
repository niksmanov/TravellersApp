import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../models/advertisement';
import { AuthService } from '../services/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();

  advertisementsList: FirebaseListObservable<Advertisement[]>;

  constructor(public auth: AuthService, private advSvc: AdvertisementService) {
  }

  createAdvertisement() {
    this.advertisement.ownerEmail = this.auth.currentUserDisplayEmail;
    this.advSvc.createAdvertisement(this.advertisement);
    this.advertisement = new Advertisement(); // reset advertisement
  }

  deleteAdvertisement(advToDelete) {
    this.advSvc.deleteAdvertisement(advToDelete);
  }

  ngOnInit() {
    this.advertisementsList = this.advSvc.getAdvertisementsList
      ({
        orderByChild: 'ownerEmail',
        equalTo: this.auth.currentUserDisplayEmail
      });
  }
}
