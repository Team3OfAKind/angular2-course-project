import { Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  group } from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../app.component.css', './contacts.component.css'],
  animations: [
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 100, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.2s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 1000
        })),
        animate('0.2s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.2s ease', style({
          transform: 'translateX(50px)',
          width: 1000
        })),
        animate('0.2s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
})
export class ContactsComponent implements OnInit {
  contacts: any;

  constructor(private service: InfoService) {
    this.contacts = {};
  }

  ngOnInit() {
    this.service.getRestaurantContacts()
      .subscribe(response => {
        this.contacts = response.result.contacts;
      });
  }

}
