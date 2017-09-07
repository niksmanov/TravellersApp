import { HousesComponent } from './houses/houses.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'hotels', component: HotelsComponent }
];


export const AdvertisementRouting = RouterModule.forChild(routes);
