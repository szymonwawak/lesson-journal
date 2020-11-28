import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresDialogComponent } from './scores-dialog.component';

describe('ScoresDialogComponent', () => {
  let component: ScoresDialogComponent;
  let fixture: ComponentFixture<ScoresDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
