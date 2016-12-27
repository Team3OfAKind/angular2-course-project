import { Pipe, PipeTransform } from '@angular/core';
import {Meal} from '../models/meal-model';

@Pipe({
    name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform{
    transform(meals: Meal[], category: string){
        if(!meals){
            return null;
        }

        if(!category || category === 'All'){
            return meals;
        }

        return meals.filter(meal=>meal.category === category);
    }
}