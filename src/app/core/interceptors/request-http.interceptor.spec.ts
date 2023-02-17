import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoadingService } from '../services/loading.service';

import { RequestHttpInterceptor } from './request-http.interceptor';

describe('RequestHttpInterceptor', () => {
  let interceptor: RequestHttpInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestHttpInterceptor],
    });

    interceptor = TestBed.inject(RequestHttpInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
