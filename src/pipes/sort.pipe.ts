import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../models/meal-model';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(meals: Meal[], sortType: string, sortOrder: string) {
        if (!meals) {
            return null;
        }
        
        console.log(sortType);
        console.log(sortOrder);
        sortType = sortType.toLowerCase();
        sortOrder = sortOrder.toLowerCase();
        let order = 1;
        if (sortOrder === 'descending') {
            order = -1;
        }

        return meals.sort((x, y) => {
            let result;
            if (typeof x[sortType] === 'number'){
                result = x[sortType] - y[sortType];
            // }else if(sortType === 'price'){
            //     let priceX = + x[sortType].split(' ')[0];
            //     let priceY = + y[sortType].split(' ')[0];
            //     result = priceX - priceY;
            }
            else{
                result = x[sortType].localeCompare(y[sortType]);
            }

            return result * order;
        });
    }
}