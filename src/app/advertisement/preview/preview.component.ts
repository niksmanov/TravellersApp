import { Advertisement } from './../../models/advertisement';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
 @Input() advertisement;
  constructor() { }

  ngOnInit() {
  }

}
