import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent implements OnInit {
  @Input() authors!: string[];
  @Output() removeAuthorByIndex = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public deleteAuthor(i: number): void {
    this.removeAuthorByIndex.emit(i);
  }
}
