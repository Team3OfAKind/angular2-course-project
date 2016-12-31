import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css', './about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;

  constructor(private service: InfoService) {
    this.info = { delivery: {}, statistics: {} };
  }

  ngOnInit() {
    this.service.getRestaurantInfo()
      .subscribe(response => {
        this.info = response.result.info;
      });
  }
}
