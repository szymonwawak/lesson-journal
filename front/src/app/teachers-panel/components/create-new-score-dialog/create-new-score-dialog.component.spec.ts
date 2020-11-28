import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewScoreDialogComponent } from './create-new-score-dialog.component';

describe('CreateNewScoreDialogComponent', () => {
  let component: CreateNewScoreDialogComponent;
  let fixture: ComponentFixture<CreateNewScoreDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewScoreDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
