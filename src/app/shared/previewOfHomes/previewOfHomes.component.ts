import { Home } from './../../models/home';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-previewOfHomes',
  templateUrl: './previewOfHomes.component.html',
  styleUrls: ['./previewOfHomes.component.css']
})
export class PreviewOfHomesComponent implements OnInit {
@Input() home: Home;
  constructor() { }

  ngOnInit() {
  }

}
