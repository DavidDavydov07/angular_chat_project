import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

//catchError = .catch, tap = do, toPromise exists in observables as a method.
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseURL = 'https://chatapi.edwisor.com/api/v1/';
  private baseToken = '';

  constructor(public http: HttpClient) { }

  //Sign-up function. Pretty self-explanitory.
  public signUpFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey)

    return this.http.post(`${this.baseURL}users/signup`, params);

  }// End of sign-up function

  //Sign-in function. Pretty self-explanitory.
  public signInFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('email', data.password)

    return this.http.post(`${this.baseURL}users/login`, params);
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
  }
}
