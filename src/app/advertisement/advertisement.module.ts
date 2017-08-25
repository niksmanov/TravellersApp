import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AdvertisementService } from './advertisement.service';
import { ApartmentsComponent } from '../apartments/apartments.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { HousesComponent } from '../houses/houses.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AngularFireDatabaseModule
    ],
    exports: [],
    declarations: [
        ProfileComponent,
        ApartmentsComponent,
        HotelsComponent,
        HousesComponent
    ],
    providers: [AdvertisementService]
})
export class AdvertisementModule { }
