import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailSplit'
})
export class EmailSplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {
      return 'no value is given';
    }
    return value.split('@')[0];
  }
}
