import { Component, OnInit } from '@angular/core';
import { Workspace } from '../../shared/workspace.model';
import { WorkspaceService } from '../../shared/workspace.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  workspaces: Workspace[] = [];

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit() {
    // get workspaces from secure api end point
    this.workspaceService.getWorkspaces()
      .subscribe(workspaces => {
        this.workspaces = workspaces;
      });
  }

}
