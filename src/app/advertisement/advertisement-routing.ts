import { AdvSideComponent } from './advSide/advSide.component';
import { HousesComponent } from './houses/houses.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:key', component: AdvSideComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:key', component: AdvSideComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:key', component: AdvSideComponent }
];


export const AdvertisementRouting = RouterModule.forChild(routes);
