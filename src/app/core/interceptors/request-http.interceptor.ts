import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {
  constructor(private readonly _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loadingService.setLoading(true);
    return next
      .handle(request)
      .pipe(finalize(() => this._loadingService.setLoading(false)));
  }
}
