import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectDialogComponent } from './create-subject-dialog.component';

describe('CreateSubjectDialogComponent', () => {
  let component: CreateSubjectDialogComponent;
  let fixture: ComponentFixture<CreateSubjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubjectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
