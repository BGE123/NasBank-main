import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSpacer',
  standalone: false,
})
export class TextSpacerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let newValue = '';
    for (let each of value) newValue = newValue + `${each} `;
    return newValue;
  }
}
