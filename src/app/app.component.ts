
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // users: FirebaseListObservable<any[]>;
  // cuisines: FirebaseListObservable<any[]>;
  // restaurants: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
}

  ngOnInit() {
    // this.cuisines = this.db.list('/cuisines');
    // this.restaurants = this.db.list('/restaurants');
  // this.users = this.db.list('/users');
  // }
  // add() {
  //   this.users.push({
  //     email: 'new User'
  //   });
  // }
 }
}
