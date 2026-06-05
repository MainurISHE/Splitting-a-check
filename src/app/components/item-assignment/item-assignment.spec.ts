import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAssignment } from './item-assignment';

describe('ItemAssignment', () => {
  let component: ItemAssignment;
  let fixture: ComponentFixture<ItemAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAssignment],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemAssignment);

    component = fixture.componentInstance;

    fixture.componentRef.setInput('item', {
      id: '1',
      title: 'Pizza',
      price: 1000,
      assignments: [],
    });

    fixture.componentRef.setInput('participants', []);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
