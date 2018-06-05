import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../shared/workspace.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/user.model';
import { Workspace } from '../../shared/workspace.model';

@Component({
  selector: 'app-workspaces-panel',
  templateUrl: './workspaces-panel.component.html',
  styleUrls: ['./workspaces-panel.component.scss']
})


export class WorkspacesPanelComponent implements OnInit {
  userId = 1;
  public workspaces: Workspace[];
  public lastWorkspace: Workspace;
  constructor(private workspaceService: WorkspaceService, private httpClient: HttpClient) { }


  ngOnInit() {

    this.workspaceService.findAll(this.userId).subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces; });

    this.workspaceService.findLast(this.userId).subscribe((lastWorkspace: Workspace) => {
      this.lastWorkspace = lastWorkspace; });

    }




}
