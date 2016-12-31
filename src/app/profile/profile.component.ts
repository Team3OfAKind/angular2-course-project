import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import {User} from '../../models/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../app.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private notification: NotificationsService) { 
  }

  ngOnInit() {
    this.userService.getUserProfile()
    .subscribe(res =>{
      this.user = res.result.user;
    });
  }

  removeFromFavourite(event){
    this.user.favouriteMeals.splice(event.index, 1);
  }
  
}
