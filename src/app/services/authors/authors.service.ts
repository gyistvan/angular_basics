import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './interfaces/author';
import { Observable, of } from 'rxjs';
import { apiUrls, BASE_URL } from '../../apiUrls';
import { catchError, map } from 'rxjs/operators';
import { GetAuthorsResponse } from './interfaces/authorResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Author[]> {
    return this.http.get<GetAuthorsResponse>(BASE_URL + apiUrls.AUTHORS.GET_ALL).pipe(map(({ result }) => result));
  }

  public addAuthor(name: string): Observable<any> {
    return this.http.post<any>(BASE_URL + apiUrls.AUTHORS.ADD_AUTHOR, { name }).pipe(
      catchError((err) => {
        console.error(err);
        return of(err);
      })
    );
  }
}
