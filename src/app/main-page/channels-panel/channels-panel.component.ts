import { Component, OnInit, Input } from '@angular/core';
import {WorkspacesPanelComponent} from '../workspaces-panel/workspaces-panel.component';
import { Workspace } from '../../shared/workspace.model';
import { WorkspaceService } from '../../shared/workspace.service';
import { HttpClient } from '@angular/common/http';
import { ChannelService } from '../../shared/channel.service';
import { Channel } from '../../shared/channel.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-channels-panel',
  templateUrl: './channels-panel.component.html',
  styleUrls: ['./channels-panel.component.scss']
})
export class ChannelsPanelComponent implements OnInit {
@Input() workspace$: Observable<Workspace>;
channel$: Observable<Channel>;
@Input() lastChannel$: Observable<Channel>;


  public  channels: Channel[];
  constructor(private channelService: ChannelService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getChannelsbyWorkspaces();
  }

  getChannelsbyWorkspaces() {
    this.workspace$.subscribe(workspace =>
      this.loadChannels(workspace)
    );
  }


  public loadChannels(workspace: Workspace) {
    this.channelService.findByWorkspace(workspace.idWorkspace).subscribe((channels: Channel[]) =>
    this.channels = channels);

  }

  switchChannel(channel: Channel) {
    this.channelService.updateCurrentChan(channel);
    return this.channelService.getCurrentChannel();
    }

}
