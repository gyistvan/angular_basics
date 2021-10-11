import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author';
import { AddAuthorResponse } from './interfaces/authorResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private authors$$ = new BehaviorSubject<Author[]>([]);
  public authors$ = this.authors$$.asObservable();

  private isLoading$$ = new BehaviorSubject(false);
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorService: AuthorsService) {
    this.getAuthorsFromBe();
  }

  public getAll(): Observable<Author[]> {
    return this.authors$;
  }

  private getAuthorsFromBe(): void {
    this.isLoading$$.next(true);
    this.authorService.getAll().subscribe((authors) => {
      this.authors$$.next(authors);
      this.isLoading$$.next(false);
    });
  }

  public addAuthor(name: string): Observable<AddAuthorResponse> {
    this.isLoading$$.next(true);
    return this.authorService.addAuthor(name).pipe(
      tap((resp: AddAuthorResponse) => {
        this.authors$$.next([...this.authors$$.value, resp.result]);
        this.isLoading$$.next(false);
      })
    );
  }
}
