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

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client/dist/sockjs';
import { BaseService } from './base.service';
import { HttpHeaders } from '@angular/common/http';


const CHAT_URL = 'ws://echo.websocket.org/';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private serverUrl = 'http://localhost:8080/websocket';
  private title = 'WebSockets chat';
  private stompClient;


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


  // constructor(private baseService: BaseService) {
  //   // this.initializeWebSocketConnection();
  // }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic/chat', (message) => {
        if (message.body) {
          // $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  follow(channelId: string) {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // const heads = {'WildslackAuthorization': localStorage.getItem('WildslackAuthorization')};
    // const heads = new HttpHeaders({'wildslackauthorization': localStorage.getItem('WildslackAuthorization') });
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic/chat', (message) => {
        if (message.body) {
          // $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    }, function(msg) {
      console.log('error on connection');
    });
  }

  sendMessage(message: Message) {
    const msg = {'name': message.message};
    this.stompClient.send('/app/send/message' , {}, JSON.stringify(msg));
    console.log('Sending msg => ' + message.message);
  }



}
