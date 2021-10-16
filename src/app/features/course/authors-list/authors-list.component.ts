import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'src/app/services/authors/interfaces/author';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent {
  @Input() authorIds!: string[];
  @Output() removeAuthorByIndex = new EventEmitter();

  public filteredAuthors: Author[] = [];
  public authors: Author[] = [];
  public isLoading: Boolean = false;

  constructor(private authorStateFacade: AuthorsStateFacade) {}

  ngOnInit(): void {
    this.authorStateFacade.authors$.subscribe((authors) => {
      this.authors = authors;
      this.filteredAuthors = authors.filter((author) => !this.authorIds.includes(author.id));
    });
    this.authorStateFacade.isAuthorsLoading$.subscribe((isLoading) => (this.isLoading = isLoading));
  }

  public getAuthorNameById(id: string): string | undefined {
    return this.authors?.find((author) => author.id === id)?.name;
  }

  public removeAuthor(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.removeAuthorByIndex.emit(id);
  }
}
