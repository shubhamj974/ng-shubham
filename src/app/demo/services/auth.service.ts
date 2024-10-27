import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../model/auth.interface';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginStatus: boolean = false;
  private url = environment.baseUrl;
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private spinner: SpinnerService
  ) {}

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = this.getToken();
      this.verifyToken(token)
        .pipe(
          map((res) => {
            resolve(res.status);
          })
        )
        .subscribe();
    });
  }

  logIn(params: IAuth): Observable<any> {
    console.log('object', params);
    const userData = { username: params.email, password: params.password };
    return this._http.post<IAuth>(`${this.url}/auth/login`, userData).pipe(
      map((res: any) => {
        if (res.status) {
          this.storeToken(res.data.access_token);
          this.loginStatus = true;
          this._router.navigate(['']);

          return res;
        }
        return res;
      })
    );
  }

  storeToken(token: string) {
    sessionStorage.setItem('Token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('Token');
  }

  logOut(): void {
    return sessionStorage.removeItem('Token');
  }

  verifyToken(token: string): Observable<any> {
    const verificationUrl = `${this.url}/auth/verify-token`;
    return this._http.post(verificationUrl, { token }).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  getUserData() {
    return this._http.get(`${this.url}/custumer/data`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
