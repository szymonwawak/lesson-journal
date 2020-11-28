import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPresenceListDialogComponent } from './edit-presence-list-dialog.component';

describe('EditPresenceListDialogComponent', () => {
  let component: EditPresenceListDialogComponent;
  let fixture: ComponentFixture<EditPresenceListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPresenceListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPresenceListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
