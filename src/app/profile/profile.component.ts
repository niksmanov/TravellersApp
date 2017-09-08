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

  isEdited = false;
  advertisementKey: any;

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

  advertisementToEdit(advKey) {
    this.advertisementKey = advKey;
    if (this.isEdited === false) {
      this.advSvc.getAdvertisement(advKey).subscribe(data => {
        this.advertisement.$key = data.$key,
          this.advertisement.bedsCount = data.bedsCount,
          this.advertisement.description = data.description,
          this.advertisement.ownerEmail = data.ownerEmail,
          this.advertisement.ownerFullname = data.ownerFullname,
          this.advertisement.ownerPhone = data.ownerPhone,
          this.advertisement.propertyAddress = data.propertyAddress,
          this.advertisement.propertyPrice = data.propertyPrice,
          this.advertisement.propertyType = data.propertyType,
          this.advertisement.roomsCount = data.roomsCount;
      });
      this.isEdited = true;
    } else {
      this.advertisement = new Advertisement(); // reset advertisement
      this.isEdited = false;
    }
  }

  editAdvertisement() {
    this.advSvc.updateItem(this.advertisementKey,
      {
        propertyType: this.advertisement.propertyType,
        ownerEmail: this.advertisement.ownerEmail,
        ownerFullname: this.advertisement.ownerFullname,
        ownerPhone: this.advertisement.ownerPhone,
        propertyAddress: this.advertisement.propertyAddress,
        roomsCount: this.advertisement.roomsCount,
        bedsCount: this.advertisement.bedsCount,
        propertyPrice: this.advertisement.propertyPrice,
        description: this.advertisement.description,
      }
    );
    this.advertisement = new Advertisement(); // reset advertisement
    this.isEdited = false;
  }

  ngOnInit() {
    this.advertisementsList = this.advSvc.getAdvertisementsList
      ({
        orderByChild: 'ownerEmail',
        equalTo: this.auth.currentUserDisplayEmail
      });
  }
}
