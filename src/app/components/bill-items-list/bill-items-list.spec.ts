import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillItemsList } from './bill-items-list';

describe('BillItemsList', () => {
  let component: BillItemsList;
  let fixture: ComponentFixture<BillItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillItemsList],
    }).compileComponents();
    fixture = TestBed.createComponent(BillItemsList);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
