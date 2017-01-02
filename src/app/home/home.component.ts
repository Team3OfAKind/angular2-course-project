import { Component, OnInit, Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes } from '@angular/core';
import { Http, Response } from '@angular/http';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(500, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])
]
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
          first: sentences[0] + '.',
          second: sentences[1].substr(1)
        };
      });
  }

}
