import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './interfaces/author';
import { Observable, of } from 'rxjs';
import { apiUrls, BASE_URL } from '../../apiUrls';
import { catchError, map } from 'rxjs/operators';
import { AddAuthorResponse, GetAuthorsResponse } from './interfaces/authorResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Author[]> {
    return this.http.get<GetAuthorsResponse>(BASE_URL + apiUrls.AUTHORS.GET_ALL).pipe(map(({ result }) => result));
  }

  public addAuthor(addAuthorAction: { author: string }): Observable<Author> {
    return this.http
      .post<AddAuthorResponse>(BASE_URL + apiUrls.AUTHORS.ADD_AUTHOR, { name: addAuthorAction.author })
      .pipe(
        map((author) => author.result),
        catchError((err) => of(err))
      );
  }
}
