import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../shared/workspace.service';
import { Observable, of } from 'rxjs';
import { Workspace } from '../../shared/workspace.model';
import { Channel } from '../../shared/channel.model';
import { ChannelService } from '../../shared/channel.service';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss']
})
export class SidePannelComponent implements OnInit {
 userId = 1;
 lastWorkspace$: Observable<Workspace>;
 lastChannel$: Observable<Channel>;
  constructor(private workspaceService: WorkspaceService, private channelService: ChannelService) { }

  ngOnInit() {
    this.lastWorkspace$ = this.getLastWorkspace();
    this.lastChannel$ = this.getLastChannel();

  }

  getLastWorkspace() {
    return this.workspaceService.findLast(this.userId);

  }

  public getLastChannel() {
   return this.channelService.findLast(this.userId);
  }

}
