import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from '../../../services/user.service';
import { MealsService } from '../../../services/meals.service';
import { Meal } from '../../../models/meal-model';
import { User } from '../../../models/user-model';

@Component({
    selector: 'meal-menu',
    templateUrl: './meal-menu.component.html',
    styleUrls: ['./meal-menu.component.css']
})
export class MealMenuComponent implements OnInit {
    hasLoggedUser: boolean;
    isInCart: boolean;
    isFavourite: boolean;
    options: Object;
    likeButtonText: string;

    @Input() meal: Meal;
    @Input() user: User;

    constructor(private userService: UserService, private notification: NotificationsService, private mealsService: MealsService) { }

    ngOnInit() {
        this.hasLoggedUser = false;
        if (this.user) {
            this.hasLoggedUser = true;
            this.isInCart = this.user.cartMeals.find(m => m._id === this.meal._id);
            this.isFavourite = this.user.favouriteMeals.find(m => m._id === this.meal._id);
            this.likeButtonText = this.isFavourite ? 'Dislike' : 'Like';

        }
        this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
    }

    ngOnChanges() {
        if (this.user) {
            this.hasLoggedUser = true;
            this.isInCart = this.user.cartMeals.find(m => m._id === this.meal._id);
            this.isFavourite = this.user.favouriteMeals.find(m => m._id === this.meal._id);
            this.likeButtonText = this.isFavourite ? 'Dislike' : 'Like';
        }
    }

    addToCart() {
        this.userService.addMealToCart(this.meal)
            .subscribe(
            (res) => {
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

    changeLike() {
        this.mealsService.changeLike(this.likeButtonText.toLowerCase(), this.meal)
            .subscribe(
            res => {
                if (this.isFavourite) {
                    this.isFavourite = false;
                    this.likeButtonText = 'Like';
                    this.meal.likes--;
                } else {
                    this.isFavourite = true;
                    this.likeButtonText = 'Dislike';
                    this.meal.likes++;
                }
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
