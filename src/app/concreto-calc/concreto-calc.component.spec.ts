import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretoCalcComponent } from './concreto-calc.component';

describe('ConcretoCalcComponent', () => {
  let component: ConcretoCalcComponent;
  let fixture: ComponentFixture<ConcretoCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcretoCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcretoCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
