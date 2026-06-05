import { Participant } from './participant.model';
import { BillItem } from './bill-item.model';

export interface ReceiptDto {
  items: BillItem[];
  participants: Participant[];
}