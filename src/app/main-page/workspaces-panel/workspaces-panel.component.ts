import { Component, OnInit, Input } from '@angular/core';
import { WorkspaceService } from '../../shared/workspace.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/user.model';
import { Workspace } from '../../shared/workspace.model';
import { Observable, of } from 'rxjs';
import { UserService } from '../../shared/user.service';



@Component({
  selector: 'app-workspaces-panel',
  templateUrl: './workspaces-panel.component.html',
  styleUrls: ['./workspaces-panel.component.scss']
})


export class WorkspacesPanelComponent implements OnInit {

  public workspaces: Workspace[];
  @Input() lastWorkspace$: Observable<Workspace>;
  constructor(private workspaceService: WorkspaceService, private httpClient: HttpClient, private userService: UserService) {

  }


  ngOnInit() {
    this.getAllWorkspaces();
  }


  getAllWorkspaces() {

    this.workspaceService.findAll(this.userService.getCurrentUser().idUser).subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces;
    });

  }




}
