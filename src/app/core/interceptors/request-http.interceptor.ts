import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {
  constructor(private readonly _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        message: 'holita',
      },
    });
    return next.handle(request);
  }
}
