import { TestBed, inject } from '@angular/core/testing';

import { WorkspaceService } from './workspace.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WorkspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkspaceService]
    });
  });

  it('should be created', inject([WorkspaceService], (wkService: WorkspaceService) => {
    expect(wkService).toBeTruthy();

    

  }));
});
