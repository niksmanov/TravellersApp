import { UserService } from './../core/services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PreviewOfHomesComponent } from './previewOfHomes/previewOfHomes.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    PreviewOfHomesComponent
],
providers: [UserService
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PreviewOfHomesComponent
  ]
})
export class SharedModule { }
