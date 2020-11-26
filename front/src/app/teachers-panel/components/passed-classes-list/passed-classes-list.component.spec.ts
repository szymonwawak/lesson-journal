import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedClassesListComponent } from './passed-classes-list.component';

describe('PassedClassesListComponent', () => {
  let component: PassedClassesListComponent;
  let fixture: ComponentFixture<PassedClassesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassedClassesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
