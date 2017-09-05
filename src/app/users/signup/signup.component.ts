import { UserService } from './../../core/services/user.service';

import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // providers: [UserService]  // dali trqbva da e tuk??
})
export class SignupComponent  {
  user: Observable<firebase.User>;     // ???? za ko mi e?
  constructor(private service: UserService, public afAuth: AngularFireAuth) {
     this.user = this.afAuth.authState;  // ???? za kakvo ?
  }

  signupWithEmail( username, email , firstname, lastname, password) {
    this.service.signup( username, email , firstname, lastname, password);
  }


}
