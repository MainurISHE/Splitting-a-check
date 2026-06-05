import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBillPage } from './split-bill.page';

describe('SplitBillPage', () => {
  let component: SplitBillPage;
  let fixture: ComponentFixture<SplitBillPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitBillPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitBillPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
