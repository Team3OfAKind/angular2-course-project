import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private service: InfoService) {
    this.info = { moto: {}, statistics: {} };
  }

  ngOnInit() {
    this.service.getRestaurantInfo()
      .subscribe(response => {
        this.info = response.result.info;
        let moto = this.info.moto;
        let sentences = moto.split('.');
        this.info.moto = {
          first: sentences[0] + ".",
          second: sentences[1].substr(1)
        }
      });
  }

}
