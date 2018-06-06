// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessageService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { Message } from './message.model';

const CHAT_URL = 'ws://echo.websocket.org/';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        const data = JSON.parse(response.data);
        // return {
        //   author: data.author,
        //   message: data.message
        // };
        return data;
      });
  }
}
