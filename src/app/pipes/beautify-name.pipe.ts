import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyName'
})
export class BeautifyNamePipe implements PipeTransform {

  transform(nameValue: string, prefix: string, sufix: string): string {

    const updateName: string = `${prefix} ${nameValue} ${sufix}`;
    return updateName;
  }

}
