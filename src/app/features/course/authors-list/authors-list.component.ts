import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { Author } from 'src/app/services/authors/interfaces/author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent {
  @Input() authorIds!: string[];
  @Output() removeAuthorByIndex = new EventEmitter();

  public existingAuthors: Author[] = [];
  public isLoading: Boolean = false;

  constructor(private authorStore: AuthorsStoreService) {}

  ngOnInit(): void {
    this.authorStore.getAll().subscribe((authors) => {
      this.existingAuthors = authors;
    });
    this.authorStore.isLoading$.subscribe((isLoading) => (this.isLoading = isLoading));
  }

  public getAuthorNameById(id: string): string {
    return this.existingAuthors.find((author) => author.id === id)!.name;
  }

  public removeAuthor(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.removeAuthorByIndex.emit(id);
  }
}
