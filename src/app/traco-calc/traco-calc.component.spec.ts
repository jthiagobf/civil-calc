import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracoCalcComponent } from './traco-calc.component';

describe('TracoCalcComponent', () => {
  let component: TracoCalcComponent;
  let fixture: ComponentFixture<TracoCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracoCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracoCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
