import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { ChannelService } from '../../shared/channel.service';
import { Observable, of } from 'rxjs';
import { Channel } from '../../shared/channel.model';
import { Workspace } from '../../shared/workspace.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  users: User[];
  @Input() channel$: Observable<Channel>;
  @Input() workspace$: Observable<Workspace>;
  currentUser: User;


  constructor(private userService: UserService, private channelService: ChannelService) { }

  ngOnInit() {
    this.getUsersbyChannel();
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.currentUser = currentUser;
    });
  }

  getUsersbyChannel() {
    this.channel$.subscribe(channel =>
      this.loadUsers(channel)
    );
  }


  public loadUsers(channel: Channel) {
    this.userService.findUsersByChannel(channel.idChannel).subscribe((user: User[]) => {
      this.users = user;
    });

  }

  OpenDirectChat(user: User) {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.channelService.getDirectChat(currentUser.idUser, user.idUser).subscribe((channel: Channel) => {
        if ( channel !== null) {
          this.channelService.updateCurrentChan(channel);
        } else {
          this.workspace$.subscribe((workspace: Workspace) => {
            this.channelService
              .createDirectChat(workspace.idWorkspace, currentUser.idUser, user.idUser)
              .subscribe((chatChannel: Channel) => {
              this.channelService.updateCurrentChan(chatChannel);
            });
          });
        }
      });
    });
   }

}
