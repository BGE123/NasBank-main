import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength',
  standalone: false
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.length.toString();
  }

}
