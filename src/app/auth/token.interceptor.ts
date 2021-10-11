import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from './services/session-storage/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public sessionStorageService: SessionStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.sessionStorageService.getToken('bearerToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }
    return next.handle(request);
  }
}
