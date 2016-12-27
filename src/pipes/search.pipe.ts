import { Pipe, PipeTransform } from '@angular/core';
import {Meal} from '../models/meal-model';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(meals: Meal[], searchWord:string){
        if(!meals){
            return null;
        }

        searchWord = searchWord.toLowerCase();
        return meals.filter(meal=>{
            return meal.name.toLowerCase().indexOf(searchWord) >= 0||
                meal.category.toLowerCase().indexOf(searchWord) >= 0 ||
                meal.description.toLowerCase().indexOf(searchWord) >= 0;
        });
    }
}