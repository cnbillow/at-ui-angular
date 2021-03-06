import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'atFormat'
})
export class AtFormatPipe implements PipeTransform {

  transform(value: Date, formatString: string): string {
    if (value) {
      return moment(value).format(formatString);
    } else {
      return '';
    }
  }
}
