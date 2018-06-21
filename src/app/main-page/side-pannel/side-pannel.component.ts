import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../shared/workspace.service';
import { Observable, of, BehaviorSubject, Subject, AsyncSubject } from 'rxjs';
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
 currentWorkspace$: Subject<Workspace> ;

  constructor(private workspaceService: WorkspaceService, private channelService: ChannelService, private userService: UserService) { }

  ngOnInit() {
   this.getLastWorkspace();
   this.getLastChannel();

  }

  getLastWorkspace() {
    this.lastWorkspace$ = this.workspaceService.findLast(this.userService.getCurrentUser().idUser);
    this.lastWorkspace$.subscribe(ws => {
      this.currentWorkspace$ = new BehaviorSubject<Workspace>(ws);
    });
  }

  public getLastChannel() {

    this.lastChannel$ = this.channelService.findLast(this.userService.getCurrentUser().idUser);

  }

}
