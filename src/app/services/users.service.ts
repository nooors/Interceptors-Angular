import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private httpSrv: HttpClient) {}

  gerUsers() {
    return this.httpSrv
      .get("https://reqres.in/api/users")
      .pipe(map((resp: any) => resp["data"]));
  }
}
