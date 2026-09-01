import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precoFormatadoPipe',
})
export class PrecoFormatadoPipe implements PipeTransform {
  transform(value: number ): string {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }
}
