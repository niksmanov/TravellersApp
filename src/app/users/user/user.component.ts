import { UserService } from './../../core/services/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) {
   }

  ngOnInit() {
    this.service.getUser().subscribe(users =>
       console.log(users));
  }

}
