import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../shared/workspace.service';
import { Observable, of } from 'rxjs';
import { Workspace } from '../../shared/workspace.model';
import { Channel } from '../../shared/channel.model';
import { ChannelService } from '../../shared/channel.service';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss']
})
export class SidePannelComponent implements OnInit {

 lastWorkspace$: Observable<Workspace>;
 lastChannel$: Observable<Channel>;
  constructor(private workspaceService: WorkspaceService, private channelService: ChannelService, private userService: UserService) { }

  ngOnInit() {
   this.getLastWorkspace();
   this.getLastChannel();

  }

  getLastWorkspace() {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
    this.lastWorkspace$ = this.workspaceService.findLast(currentUser.idUser);
  });

  }

  public getLastChannel() {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
    this.lastChannel$ = this.channelService.findLast(currentUser.idUser);
  });
  }

}
