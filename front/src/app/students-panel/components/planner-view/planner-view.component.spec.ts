import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlannerViewComponent} from './planner-view.component';

describe('PlannerViewComponent', () => {
  let component: PlannerViewComponent;
  let fixture: ComponentFixture<PlannerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
