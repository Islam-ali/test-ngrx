import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExambleCalculateComponent } from './examble-calculate.component';

describe('ExambleCalculateComponent', () => {
  let component: ExambleCalculateComponent;
  let fixture: ComponentFixture<ExambleCalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExambleCalculateComponent]
    });
    fixture = TestBed.createComponent(ExambleCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
