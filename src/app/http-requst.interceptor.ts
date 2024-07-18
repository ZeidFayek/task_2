import { HttpInterceptorFn } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const httpRequstInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Request started');
  return next(req).pipe(
    tap(
      (event) => console.log('HTTP Request success', event),
      (error) => console.log('HTTP Request error', error)
    ));
};
