import { Observable } from 'rxjs';

export interface UseCase<T, U> {
  execute(commands: T): Observable<U>;
}
