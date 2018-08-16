import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'category'
})


export class SearchFilterPipe implements PipeTransform {
  btnSearchModel: string;
   public transform(value: any[], keys: string, term: string) {
        if (!term) { return value; }
        // tslint:disable-next-line:max-line-length
        if (keys) {
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
        } else {
          const result = [];
          term = term.toLowerCase();
          value.filter( it => {
             for (let key in it) {
               if(it[key]==null){
                 continue;
               }
                if (((it[key].toString()).toLowerCase()).indexOf(term) > -1 &&  result.indexOf(it) < 0) {
                  result.push(it);
                }
             }
           });
           return result;
        }
        }
      }


