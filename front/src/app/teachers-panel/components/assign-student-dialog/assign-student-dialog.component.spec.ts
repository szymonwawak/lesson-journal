import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentDialogComponent } from './assign-student-dialog.component';

describe('AssignStudentDialogComponent', () => {
  let component: AssignStudentDialogComponent;
  let fixture: ComponentFixture<AssignStudentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
