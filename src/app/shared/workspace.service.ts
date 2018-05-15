import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Workspace } from './workspace.model';
import { Headers, Response, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }


   getWorkspaces(): Observable<Workspace[]> {
    // add authorization header with jwt token
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = { headers: headers };

    // get users from api
    return this.http.get('/workspace', options)
      .map((response: Response) => response.json());
  }
}
