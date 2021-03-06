import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from '../../../services/user.service';
import { MealsService } from '../../../services/meals.service';
import { Meal } from '../../../models/meal-model';
import { User } from '../../../models/user-model';

@Component({
    selector: 'meal-favourite',
    templateUrl: './meal-favourite.component.html',
    styleUrls: ['./meal-favourite.component.css']
})
export class MealFavouriteComponent implements OnInit {
    isInCart: boolean;
    options: Object;

    @Input() meal: Meal;
    @Input() user: User;
    @Input() index: number;

    @Output() onDislike = new EventEmitter();

    constructor(private userService: UserService, private notification: NotificationsService, private mealsService: MealsService) { }

    ngOnInit() {
        if (this.user) {
            this.isInCart = this.user.cartMeals.find(m => m._id === this.meal._id);
        }
        this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
    }

    addToCart() {
        this.userService.addMealToCart(this.meal)
            .subscribe((res) => {
                this.notification.success('', res.result.message);
                this.isInCart = true;
            },
            error => {
                const errorRes = error.json();
                if (errorRes.error) {
                    this.notification.error('', errorRes.error.message);
                } else {
                    this.notification.error('', 'The meal could not be added to cart.');
                }
            });
    }

    dislike() {
        this.mealsService.changeLike('dislike', this.meal)
            .subscribe(
            res => {
                this.notification.success('', res.message);
                 this.onDislike.emit({ index: this.index });
            },
            error => {
                const errorRes = error.json();
                if (errorRes.error) {
                    this.notification.error('', errorRes.error.message);
                } else {
                    this.notification.error('', 'There was an error and the meal status could not be changed.');
                }
            });
    }
}

