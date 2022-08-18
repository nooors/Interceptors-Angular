import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private httpSrv: HttpClient) {}

  gerUsers() {
    return this.httpSrv.get("https://reqres.in/api/users").pipe(
      map((resp: any) => resp["data"]),

      catchError((err) => {
        console.log("error registrado");
        console.warn(err);
        // code in course deprecated. This works.
        return throwError(() => new Error("new error not deprecated"));
      }),
    );
  }
}
