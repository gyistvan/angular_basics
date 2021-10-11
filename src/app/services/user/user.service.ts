import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrls, BASE_URL } from 'src/app/apiUrls';
import { User, UserResponse } from './interfaces/userResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public get(): Observable<User> {
    return this.http.get<UserResponse>(BASE_URL + apiUrls.USER.me).pipe(
      map((resp: UserResponse) => {
        return resp.result;
      })
    );
  }
}
