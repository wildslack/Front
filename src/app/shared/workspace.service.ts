import { Injectable } from '@angular/core';
import { Channel } from './channel.model';
import { Message } from './message.model';
import { Workspace } from './workspace.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { BaseService } from './base.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class WorkspaceService {


  constructor(private http: HttpClient, private baseService: BaseService) { }

  findAll(userId: number): Observable<Workspace[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const workspacesUrl = environment.rootUrl + '/api/workspaces?idUser=' + userId;
    return this.http.get<Workspace[]>(workspacesUrl, customHeader);
  }

  findLast(userId: number): Observable<Workspace> {
    const customHeader = this.baseService.buildHttpHeader();
    const workspacesUrl = environment.rootUrl + '/api/workspaces/last?idUser=' + userId;
    return this.http.get<Workspace>(workspacesUrl, customHeader);
  }
}
