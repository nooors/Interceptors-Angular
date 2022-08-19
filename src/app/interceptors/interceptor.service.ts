import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      "user-token": "ABC9877898789097Ksd9",
    });

    const reqClone = req.clone({
      headers,
    });
    return next.handle(reqClone).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log("error happends");
    console.info("error registered in log");
    console.warn(error);
    return throwError(() => new Error("new error in the correct format"));
  }
}
