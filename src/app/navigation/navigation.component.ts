import { Component, OnInit } from '@angular/core';
import { AuthService } from '../firebase/auth.service';

@Component({
  selector: 'app-navigation',
  providers: [AuthService],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(public auth: AuthService) {
  }
  title = 'Traveller\'s App';

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
  }
}
