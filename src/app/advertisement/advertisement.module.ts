
import { HousesComponent } from './houses/houses.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ProfileComponent } from './../profile/profile.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdvertisementRouting } from './advertisement-routing';

@NgModule({
  imports: [
    CommonModule,
    AdvertisementRouting,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  exports: [
    ProfileComponent,
    ApartmentsComponent,
    HotelsComponent,
    HousesComponent
  ],
  declarations: [
    ProfileComponent,
    ApartmentsComponent,
    HotelsComponent,
    HousesComponent
  ]
})
export class AdvertisementModule { }
