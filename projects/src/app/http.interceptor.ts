import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add custom headers
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN_HERE`
      }
    });
    return next.handle(clonedRequest);
  }
}
