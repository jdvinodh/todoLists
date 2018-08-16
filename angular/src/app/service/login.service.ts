import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { DataService } from '../shared/service/data.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
  })
export class LoginService {
    postLoginUrl = this.dataService.apiEndPoint + 'authenticate';

    constructor(private http: Http, private httpClient: HttpClient,  private dataService: DataService) { }

    // login service
    login(username, password): Observable<any> {
        const Params = new HttpParams({
            fromObject: {
                'name': username,
                'password': password
            }
        });
        return this.httpClient
            .post(this.postLoginUrl, Params, {
                params: Params
            }).pipe(map((user: Response) => {
                  // login successful if there's a jwt token in the response
                  if (user && (<any>user).token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('loggedUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    // logout
    logout() {
        sessionStorage.removeItem('loggedUser');
    }
}
