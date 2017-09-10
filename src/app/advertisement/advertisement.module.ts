import { HousesComponent } from './houses/houses.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ProfileComponent } from './../profile/profile.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdvertisementRouting } from './advertisement-routing';

// Pipes
import { UpperCaseFirstLetterPipe } from '../shared/upperCase-firstLetter.pipe';
import { EmailSplitPipe } from '../shared/email-split.pipe';

// Directives
import { StrongItemDirective } from '../shared/strongItem.directive';
import { UnderlineItemDirective } from '../shared/underlineItem.directive';


import { PreviewComponent } from './preview/preview.component';
import { AdvSideComponent } from './advSide/advSide.component';

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
    HousesComponent,
    UpperCaseFirstLetterPipe,
    EmailSplitPipe,
    StrongItemDirective,
    UnderlineItemDirective
  ],
  declarations: [
    ProfileComponent,
    ApartmentsComponent,
    HotelsComponent,
    HousesComponent,
    UpperCaseFirstLetterPipe,
    EmailSplitPipe,
    StrongItemDirective,
    UnderlineItemDirective,
    PreviewComponent,
    AdvSideComponent
]
})
export class AdvertisementModule { }
