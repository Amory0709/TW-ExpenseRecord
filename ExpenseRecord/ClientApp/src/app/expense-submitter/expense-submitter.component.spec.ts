import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSubmitterComponent } from './expense-submitter.component';

describe('ExpenseSubmitterComponent', () => {
  let component: ExpenseSubmitterComponent;
  let fixture: ComponentFixture<ExpenseSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSubmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
