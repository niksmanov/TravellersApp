import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Home } from './../../models/home';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class HomesService {

    constructor(public db: AngularFireDatabase) {

    }
    getAll(): Observable<Home[]> {
        return this.db.list('/homes');
      }
}

