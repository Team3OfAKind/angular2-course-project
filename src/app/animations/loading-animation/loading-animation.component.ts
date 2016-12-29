import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { LoadingAnimateService } from '../../../services/loading.service';

@Component({
    selector: 'loading-animate',
    template: './loading-animation.component.html',
    styles: ['./loading-animation.component.css'],
    animations: [
        trigger('loadingState', [
            state( 'inactive', style({
                opacity: 0,
                display: 'none'
            })),
            state('active',   style({
                opacity: 1,
            })),
            transition('active => inactive', animate('200ms ease-out')),
            transition('inactive => active', animate('0ms ease-in'))
        ])
    ]
})
export class LoadingAnimateComponent implements OnInit {

    loadingState: string = 'inactive';

    constructor(private _loadingSvc: LoadingAnimateService) {}

    ngOnInit(): void {
        this._loadingSvc.getValue().subscribe( (status: boolean) => {
            this.loadingState = status ? 'active' : 'inactive';
        });
    }
}