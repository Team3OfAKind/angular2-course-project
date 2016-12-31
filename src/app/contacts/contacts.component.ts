import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../app.component.css', './contacts.component.css']
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
