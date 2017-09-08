import { Observable } from 'rxjs/Observable';
import { Advertisement } from './../../models/advertisement';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AdvertisementService } from './../../services/advertisement.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';
@Component({
  selector: 'app-advSide',
  templateUrl: './advSide.component.html',
  styleUrls: ['./advSide.component.css']
})
export class AdvSideComponent implements OnInit {
  public advertisement: Advertisement;
  public key:string;

  constructor(private route: ActivatedRoute, private service: AdvertisementService) { }

  ngOnInit() {
  
   
    this.route.params
    .map(params => params['key'])
    .do(key => this.key)
    .flatMap(key => {
      return this.service.getAdvertisementsDetails(key);
    })
    .subscribe(res => {
      this.advertisement=res}
    );
    
  }

}
