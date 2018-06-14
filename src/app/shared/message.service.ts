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
import { environment } from '../../environments/environment';


const CHAT_URL = 'ws://echo.websocket.org/';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private title = 'WebSockets chat';
  private stompClient: Stomp;


  public messages: Subject<Message>;

  constructor() {
    const ws = new SockJS(environment.socketUrl);
    this.stompClient = Stomp.over(ws);
  }


  /** Définit un abonnement à un channel donné
   * @argument channelId identifiant du channel auquel on s''abonne
   * @argument msgCallback fonction callback à appeler lors de la réception d'un nouveau message
   */
  follow(channelId: string, msgCallback: Function) {
    const msgService = this;
    // const heads = {'WildslackAuthorization': localStorage.getItem('WildslackAuthorization')};
    // const heads = new HttpHeaders({'wildslackauthorization': localStorage.getItem('WildslackAuthorization') });
    this.stompClient.connect({}, function(frame) {
      msgService.stompClient.subscribe('/topic/chat', (data) => {
        if (data.body) {
          const jsonMsg = JSON.parse(data.body);
          const msg = Message.create(jsonMsg.id, jsonMsg.message, jsonMsg.idUser, jsonMsg.idChannel,
            new Date(Date.parse(jsonMsg.postDate)) );
          msgCallback(msg);
        }
      });
    }, function(msg) {
      console.log('error on connection');
    });
  }

  sendMessage(message: Message) {
    const msg = {'name': message.message};
    this.stompClient.send('/app/post/message' , {}, JSON.stringify(message));
    console.log('Sending msg => ' + message.message);
  }





    // constructor(wsService: WebsocketService) {
  //   this.messages = <Subject<Message>>wsService
  //     .connect(CHAT_URL)
  //     .map((response: MessageEvent): Message => {
  //       const data = JSON.parse(response.data);
  //       // return {
  //       //   author: data.author,
  //       //   message: data.message
  //       // };
  //       return data;
  //     });
  // }


  // constructor(private baseService: BaseService) {
  //   // this.initializeWebSocketConnection();
  // }

  // initializeWebSocketConnection() {
  //   const ws = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(ws);
  //   const that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe('/topic/chat', (message) => {
  //       if (message.body) {
  //         // $(".chat").append("<div class='message'>"+message.body+"</div>")
  //         console.log(message.body);
  //       }
  //     });
  //   });
  // }


}
