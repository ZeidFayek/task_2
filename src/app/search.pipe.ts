import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(users: any[], term: string): any[] {
    return users.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
  }

}
