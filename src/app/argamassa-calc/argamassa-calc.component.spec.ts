import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgamassaCalcComponent } from './argamassa-calc.component';

describe('ArgamassaCalcComponent', () => {
  let component: ArgamassaCalcComponent;
  let fixture: ComponentFixture<ArgamassaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArgamassaCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgamassaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
