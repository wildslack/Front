import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { ChannelService } from '../../shared/channel.service';
import { Observable, of } from 'rxjs';
import { Channel } from '../../shared/channel.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  users: User[];
  @Input() channel$: Observable<Channel>;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersbyChannel();
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

}
