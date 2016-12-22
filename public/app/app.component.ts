import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1>
        <ul>
            <li *ngFor="let pr of foods">{{pr.name}}</li>
        </ul>
    `
})
export class AppComponent implements OnInit{ 
    foods: any[];

    constructor(private http: Http ) {}

    ngOnInit(){
        this.http.get('http://localhost:3001/api/foods')
            .map((res: Response) => res.json()) 
            .subscribe(res => this.foods = res.result.foods);
    }
}
