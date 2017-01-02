import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paginate'
})
export class PaginatePipe implements PipeTransform{
    transform(items: any[], page:number, pageSize: number){
        if(!items){
            return null;
        }
        const start = (page-1)*pageSize;
        const end = start+pageSize;
        return items.slice(start,end);
    }
}