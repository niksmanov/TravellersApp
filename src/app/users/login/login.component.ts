import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // user: Observable<firebase.User>;
  constructor(private service: UserService) {
   }

  loginWithEmail(email, password) {
    this.service.login(email, password);
  }

}
