import { Component, input, output } from '@angular/core';
import { Participant } from '../../core/models/participant.model';
import { BillItem } from '../../core/models/bill-item.model';

type AssignmentChange = {
  itemId: string;
  participantId: string;
  share: number;
};

@Component({
  selector: 'app-item-assignment',
  standalone: true,
  imports: [],
  templateUrl: './item-assignment.html',
  styleUrl: './item-assignment.css',
})

export class ItemAssignment {
  item = input.required<BillItem>();
  participants = input.required<Participant[]>();
  updateAssignment = output<AssignmentChange>();
  
  handleShareChange(participantId: string, share: number) {
    this.updateAssignment.emit({ itemId: this.item().id, participantId, share });
  }

  getShare(participantId: string): number {
    const assignment = this.item().assignments.find(a => a.participantId === participantId);
    return assignment ? assignment.share : 0;
  }
}
