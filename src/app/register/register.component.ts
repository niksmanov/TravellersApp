import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {
  }
}
