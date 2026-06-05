export interface Assignment {
  participantId: string;
  share: number;
}

export interface BillItem {
  id: string;
  title: string;
  price: number;
  assignments: Assignment[];
}