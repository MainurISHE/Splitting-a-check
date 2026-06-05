import { computed, Injectable, signal, effect } from '@angular/core';
import { Participant } from '../models/participant.model';
import { BillItem } from '../models/bill-item.model';

@Injectable({
  providedIn: 'root',
})
export class BillStoreService {
  participants = signal<Participant[]>([]);
  items = signal<BillItem[]>([]);

  total = computed(() => this.items().reduce((sum, item) => sum + item.price, 0));

  participantTotals = computed(() => {
    const totals: Record<string, number> = {};

    for (const item of this.items()) {
      for (const assignment of item.assignments) {
        totals[assignment.participantId] =
          (totals[assignment.participantId] ?? 0) + (assignment.share / 100) * item.price;
      }
    }
    return totals;
  });

  addParticipant(name: string) {
    const newParticipant: Participant = {
      id: crypto.randomUUID(),
      name,
    };
    this.participants.update((participants) => [...participants, newParticipant]);
  }

  removeParticipant(participantId: string) {
    this.participants.update((participants) => participants.filter((p) => p.id !== participantId));
  }

  addItem(item: BillItem) {
    this.items.update((items) => [...items, item]);
  }

  removeItem(itemId: string) {
    this.items.update((items) => items.filter((i) => i.id !== itemId));
  }

  updateAssignment(itemId: string, participantId: string, share: number) {
    this.items.update((items) =>
      items.map((item) => {
        if (item.id !== itemId) {
          return item;
        }

        const exists = item.assignments.some((a) => a.participantId === participantId);

        const updatedAssignments = exists
          ? item.assignments.map((assignment) =>
              assignment.participantId === participantId ? { ...assignment, share } : assignment,
            )
          : [
              ...item.assignments,
              {
                participantId,
                share,
              },
            ];

        return {
          ...item,
          assignments: updatedAssignments,
        };
      }),
    );
  }

  constructor() {
    const savedParticipants = localStorage.getItem('participants');
    const savedItems = localStorage.getItem('items');

    if (savedParticipants) {
      this.participants.set(JSON.parse(savedParticipants));
    }
    if (savedItems) {
      this.items.set(JSON.parse(savedItems));
    }

    effect(() => {
      localStorage.setItem('participants', JSON.stringify(this.participants()));

      localStorage.setItem('items', JSON.stringify(this.items()));
    });
  }
}
