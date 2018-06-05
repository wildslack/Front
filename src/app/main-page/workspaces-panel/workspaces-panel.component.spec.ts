import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacesPanelComponent } from './workspaces-panel.component';

describe('WorkspacesPanelComponent', () => {
  let component: WorkspacesPanelComponent;
  let fixture: ComponentFixture<WorkspacesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspacesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
