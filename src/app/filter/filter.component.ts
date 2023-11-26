import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // allow selecting only days when the teacher has classes.
    return day == 2 || day == 5;
  };
}
