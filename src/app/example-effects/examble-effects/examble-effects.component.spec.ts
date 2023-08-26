import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExambleEffectsComponent } from './examble-effects.component';

describe('ExambleEffectsComponent', () => {
  let component: ExambleEffectsComponent;
  let fixture: ComponentFixture<ExambleEffectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExambleEffectsComponent]
    });
    fixture = TestBed.createComponent(ExambleEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
