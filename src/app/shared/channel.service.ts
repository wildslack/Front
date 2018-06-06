import { Injectable } from '@angular/core';
import { Channel } from './channel.model';
import { Message } from './message.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private http: HttpClient, private baseService: BaseService) { }

  findByWorkspace(workspaceId: number): Observable<Channel[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelsUrl = environment.rootUrl + '/api/workspaces/' + workspaceId + '/channels';
    return this.http.get<Channel[]>(channelsUrl, customHeader);
  }

  findMessages(channelId: number): Observable<Message[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const messagesUrl = environment.rootUrl + '/api/channels/' + channelId + '/messages';
    return this.http.get<Message[]>(messagesUrl, customHeader);
  }

  post(message: Message) {
    const customHeader = this.baseService.buildHttpHeader();
    const newMessageUrl = environment.rootUrl + '/api/channels/' + message.channelId + '/messages';
    this.http.post(newMessageUrl, message, customHeader);
  }

  findLast(userId: number): Observable<Channel> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelUrl = environment.rootUrl + '/api/channels/last?idUser=' + userId;
    return this.http.get<Channel>(channelUrl, customHeader);
  }

}
