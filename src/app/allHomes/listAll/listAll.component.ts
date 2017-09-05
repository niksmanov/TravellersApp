import { Home } from './../../models/home';
import { HomesService } from './../../core/services/homes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listAll',
  templateUrl: './listAll.component.html',
  styleUrls: ['./listAll.component.css']
})
export class ListAllComponent implements OnInit {
homes: Home[];
  constructor(private service: HomesService) { }

  ngOnInit() {
   console.log(this.getAll());
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        this.homes = res;
      });
  }

}
