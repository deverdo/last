import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = environment.tokenCanvas;
    const cloned = req.clone({
      headers: req.headers.set('authorization', `${token}`).set('content-type','application/json'),
    });
    return next.handle(cloned);
  }
}
