import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassesDialogComponent } from './create-classes-dialog.component';

describe('CreateClassesDialogComponent', () => {
  let component: CreateClassesDialogComponent;
  let fixture: ComponentFixture<CreateClassesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
