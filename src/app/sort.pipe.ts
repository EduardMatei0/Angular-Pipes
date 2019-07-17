import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length === 0) {
      return value;
    }

    value.sort((a, b) => a.name > b.name);

    return value;
  }

}
