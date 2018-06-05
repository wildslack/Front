import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeizureComponent } from './seizure.component';

describe('SeizureComponent', () => {
  let component: SeizureComponent;
  let fixture: ComponentFixture<SeizureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeizureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeizureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
