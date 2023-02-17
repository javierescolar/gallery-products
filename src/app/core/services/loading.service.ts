import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  setLoading(loading: boolean) {
    this._loading.next(loading);
  }

  isLoading(): Observable<boolean> {
    return this._loading.asObservable();
  }
}
