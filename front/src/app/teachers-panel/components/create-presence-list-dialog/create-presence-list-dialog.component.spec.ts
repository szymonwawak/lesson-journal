import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePresenceListDialogComponent } from './create-presence-list-dialog.component';

describe('CreatePresenceListDialogComponent', () => {
  let component: CreatePresenceListDialogComponent;
  let fixture: ComponentFixture<CreatePresenceListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePresenceListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePresenceListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
