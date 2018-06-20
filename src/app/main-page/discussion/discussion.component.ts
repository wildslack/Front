import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input } from '@angular/core';
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
import { ChannelService } from '../../shared/channel.service';
import { Channel } from '../../shared/channel.model';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit, AfterViewChecked {

  public messages: Array<Message>;
  msgToSend: string;
  idUser: number;
  idChannel: number;

  @Input('channel') private channel: Channel;
  @ViewChild('messagescontainer') private messagesDiv: ElementRef;


  constructor(private messageService: MessageService, private channelService: ChannelService, private userService: UserService) {
    this.messages = [

    ];


  }

  ngOnInit() {

    this.idUser =  this.userService.getCurrentUser().idUser;
    this.channelService.getCurrentChannel().subscribe((currentChannel: Channel) => {
      this.idChannel = currentChannel.idChannel;
      this.channelService.findLastMessages(this.idChannel).subscribe(msgs =>
        this.messages = msgs
      );
      this.subscribeToChannel(this.idChannel.toString());
    });

  }

  addNewMessage(msg: Message) {
    this.messages.push(msg);
    this.scrollToBottom();
  }

  sendMessage() {
    this.messageService.sendMessage(Message.create(null, this.msgToSend, this.idUser, this.idChannel, new Date(), null));
    this.msgToSend = '';
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesDiv.nativeElement.scrollTop = this.messagesDiv.nativeElement.scrollHeight;
    } catch (err) { }
  }

  subscribeToChannel(idChannel: string) {
    const discussionComponent = this;
    this.messageService.follow(idChannel, function (msg: Message) {
      console.log('Received msg' + msg.message);
      discussionComponent.addNewMessage(msg);
    });

  }

  isCurrentUserMessage(msgUserId: number) {
    return this.idUser === msgUserId;
  }


}
