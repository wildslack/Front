import { Injectable } from '@angular/core';
import { Channel } from './channel.model';
import { Message } from './message.model';
import { Workspace } from './workspace.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Workspace[]> {
    const workspacesUrl = environment.rootUrl + '/api/workspaces';
    return this.http.get<Workspace[]>(workspacesUrl);
  }
}
