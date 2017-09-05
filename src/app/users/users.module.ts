import { AllHomesModule } from './../allHomes/allHomes.module';
import { UserService } from './../core/services/user.service';
import { UsersRoutes } from './user-routing';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutes,
    AllHomesModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [],
  exports: [
    UserComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class UsersModule { }
