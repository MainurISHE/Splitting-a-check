import { TestBed } from '@angular/core/testing';

import { BillStoreService } from './bill-store.service';

describe('BillStoreService', () => {
  let service: BillStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(BillStoreService);
  });

  it('should calculate total correctly', () => {
    service.items.set([
      {
        id: '1',
        title: 'Pizza',
        price: 100,
        assignments: [],
      },
      {
        id: '2',
        title: 'Cola',
        price: 50,
        assignments: [],
      },
    ]);

    expect(service.total()).toBe(150);
  });

  it('should calculate participant totals correctly', () => {
    service.items.set([
      {
        id: '1',
        title: 'Pizza',
        price: 100,
        assignments: [
          {
            participantId: 'david',
            share: 0.5,
          },
          {
            participantId: 'arina',
            share: 0.5,
          },
        ],
      },
    ]);

    expect(service.participantTotals()['david']).toBe(50);

    expect(service.participantTotals()['arina']).toBe(50);
  });

  it('should update assignment share', () => {
    service.items.set([
      {
        id: '1',
        title: 'Pizza',
        price: 100,
        assignments: [
          {
            participantId: 'david',
            share: 0.5,
          },
        ],
      },
    ]);

    service.updateAssignment('1', 'david', 1);

    expect(service.items()[0].assignments[0].share).toBe(1);
  });
});
