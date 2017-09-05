import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    user: Observable<firebase.User>;
    public id: string;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
        this.user = this.afAuth.authState;
     }

    getUser() {
        return this.db.list(`users`, {
            query: {
              orderByChild: 'id',
              equalTo: this.id,
        }});
    }
    signup( username, email , firstname, lastname, password) {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.updateProfile({displayName: username, photoUrl: null});
         console.log( res);
         console.log(res.displayName);
        const id = res.uid;
         const appUser = new User(id , username, email , firstname, lastname);
         firebase.database().ref('/users/' + id).set(appUser);
         this.router.navigateByUrl('/users/login');
      }
    ).catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  }
    login(email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
          //  console.log(res.username, res.email);
         this.id = res.uid;
          const userId = res.uid;
          console.log(userId);
         this.router.navigateByUrl('/home');
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorCode);
        });
    }

    logout() {
        this.afAuth.auth.signOut()
        .then((success) => {
            this.id = undefined;
            this.user = undefined;
            this.router.navigateByUrl('/home');
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorCode);
        });
    }
}
