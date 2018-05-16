import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    readonly rootUrl = 'http://178.62.117.198:8080/wildslack';
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }



    login(email: string, password: string): Observable<boolean> {// nous, ça va être mail ou nickname et pas username
        const options = {
            headers: HttpHeaders,
            observe: 'response' as 'body', // to display the full response & as 'body' for type cast
            };
        return this.http.post(this.rootUrl + '/login', options)
            .map((headers) => {
                // login successful if there's a jwt token in the response
                const token = options.headers.get('Authorization'); // && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
