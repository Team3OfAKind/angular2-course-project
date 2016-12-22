import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meals: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3001/api/foods')
      .map((res: Response) => res.json())
      .subscribe(response => this.meals = response.result.foods);
  }

}
