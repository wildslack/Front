import { Injectable } from '@angular/core';
import { Channel } from './channel.model';
import { Message } from './message.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { last } from '@angular/router/src/utils/collection';
import { map } from 'rxjs-compat/operator/map';


@Injectable({
  providedIn: 'root'
})

export class ChannelService {

  private currentChannel  = <Channel>{};

  protected currentChannel$: BehaviorSubject<Channel> = new BehaviorSubject<Channel>(this.currentChannel);

  constructor(private http: HttpClient, private baseService: BaseService) { }


  findByWorkspace(workspaceId: number): Observable<Channel[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelsUrl = environment.rootUrl + '/api/workspaces/' + workspaceId + '/channels';
    return this.http.get<Channel[]>(channelsUrl, customHeader);
  }

  findMessages(channelId: number, idMessage): Observable<Message[]> {
    const customHeader = this.baseService.buildHttpHeader();
    let messagesUrl;
    if (idMessage === undefined || idMessage === 0 || !idMessage) {
     messagesUrl = environment.rootUrl + '/api/channels/' + channelId + '/messages';
    } else {
     messagesUrl = environment.rootUrl + '/api/channels/' + channelId + '/messages?startmessageindex=' + idMessage ;
    }
    return this.http.get<Message[]>(messagesUrl, customHeader);
  }

  findLastMessages(channelId: number): Observable<Message[]> {
    return this.findMessages(channelId, undefined);
  }

  post(message: Message) {
    const customHeader = this.baseService.buildHttpHeader();
    const newMessageUrl = environment.rootUrl + '/api/channels/' + message.idChannel + '/messages';
    this.http.post(newMessageUrl, message, customHeader);
  }

  findLast(userId: number): Observable<Channel> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelUrl = environment.rootUrl + '/api/channels/last?idUser=' + userId;
    return this.http.get<Channel>(channelUrl, customHeader);

  }

  updateCurrentChan(newChannel: Channel) {
    this.currentChannel$.next(newChannel);
    this.currentChannel = newChannel;
  }

  getCurrentChannel(): Observable<Channel> {
    return this.currentChannel$;
  }

  getDirectChat(currentUserId: number , userId: number): Observable<Channel> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelUrl = environment.rootUrl + '/api/channels/chats?idUser=' + currentUserId + '&idUser2=' + userId;
    return this.http.get<Channel>(channelUrl, customHeader);
  }

  createDirectChat(currentUserId: number , userId: number, workspaceId: number): Observable<Channel> {
    const customHeader = this.baseService.buildHttpHeader();
    const channelUrl = environment.rootUrl + '/api/channels/chats/create?idWorkspace=' + workspaceId
    + '&idUser=' + currentUserId + '&idUser2=' + userId;
    return this.http.get<Channel>(channelUrl, customHeader);
  }

  createChannel(channel: Channel, idWorkspace: number) {
    const customHeader = this.baseService.buildHttpHeader();
    const channelUrl = environment.rootUrl + '/api/channels?idWorkspace=' + idWorkspace;
    return this.http.post<Channel>(channelUrl, channel, customHeader);
   }

}

