import { Injectable } from '@angular/core';
import { Channel } from './channel.model';
import { Message } from './message.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private http: HttpClient) { }

  findByWorkspace(workspaceId: number): Observable<Channel[]> {
    const channelsUrl = environment.rootUrl + '/api/workspaces/' + workspaceId + '/channels';
    return this.http.get<Channel[]>(channelsUrl);
  }

  findMessages(channelId: number): Observable<Message[]> {
    const messagesUrl = environment.rootUrl + '/api/channels/' + channelId + '/messages';
    return this.http.get<Message[]>(messagesUrl);
  }

  post(message: Message) {
    const newMessageUrl = environment.rootUrl + '/api/channels/' + message.channelId + '/messages';
    this.http.post(newMessageUrl, message);
  }


}
