import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {MealsService} from '../../servces/meals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meals: any[];

  constructor(private service: MealsService) { 
    this.meals = [];
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.meals = response.result.meals;
      });
  }

}
