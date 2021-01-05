import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, activate: boolean = true): string {
    let anotherValue: string = '';
    if (activate) {
      return '❤️'.repeat(value.length);
    }
    console.log(anotherValue);
    return value;
  }
}
