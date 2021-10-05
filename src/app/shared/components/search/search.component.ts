import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: Search = new Search();
  @Input() public placeholder!: string;
  @Output() searchByString = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onFormSubmit(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.searchByString.emit(form.value.searchString);
  }
}
