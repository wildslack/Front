import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from 'src/app/shared/message.model';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  public messages: Array<Message>;
  msgToSend: string;

  constructor(private messageService: MessageService) {
    this.messages = [
      Message.create(78, 'How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!', '2', '1'),
      Message.create(79, 'When youre backed against the wall, break the god damn thing down', '2', '1')
    ];
  }

  ngOnInit() {
    this.messageService.messages.subscribe(msg => {
      console.log('Response from websocket: ' + msg.message);
      this.messages.push(Message.create(79, msg.message, '2', '1'));
    });
  }


  // public sendMsg() {
  //   const message = {
  //     author: 'tutorialedge',
  //     message: 'this is a test message'
  //   };

  //   this.messageService.messages.next(message);
  // }


  public sendMessage() {
    this.messageService.messages.next(Message.create(null, this.msgToSend, '2', '1'));
    this.msgToSend = '';
  }

}
