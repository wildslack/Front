import { Component, OnInit, Input } from '@angular/core';
import {WorkspacesPanelComponent} from '../workspaces-panel/workspaces-panel.component';
import { Workspace } from '../../shared/workspace.model';
import { WorkspaceService } from '../../shared/workspace.service';
import { HttpClient } from '@angular/common/http';
import { ChannelService } from '../../shared/channel.service';
import { Channel } from '../../shared/channel.model';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-channels-panel',
  templateUrl: './channels-panel.component.html',
  styleUrls: ['./channels-panel.component.scss']
})
export class ChannelsPanelComponent implements OnInit {
@Input() workspace$: Observable<Workspace>;
channel$: Observable<Channel>;
@Input() lastChannel$: Observable<Channel>;
channel: Channel;


  public  channels: Channel[];
  constructor(private channelService: ChannelService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getChannelsbyWorkspaces();
    this.channel = new Channel;
  }

  getChannelsbyWorkspaces() {
    this.workspace$.subscribe(workspace =>
      this.loadChannels(workspace)
    );
  }


  public loadChannels(workspace: Workspace) {
    this.channelService.findByWorkspace(workspace.idWorkspace).subscribe((channels: Channel[]) => {
      this.channels = channels;
    });
    }

  switchChannel(channel: Channel) {
    this.channelService.updateCurrentChan(channel);
    this.lastChannel$ = this.channelService.getCurrentChannel();
    }

    createChannel(form: NgForm) {
      this.workspace$.subscribe((workspace: Workspace) => {
       const channel$ = this.channelService.createChannel(this.channel, workspace.idWorkspace);
       channel$.subscribe(c => {
         this.switchChannel(c);
         this.getChannelsbyWorkspaces();
         this.resetForm(form);
        });
      });
    }

    resetForm(form?: NgForm) {
      if (form != null) {
        form.reset();
      }
    }

}
