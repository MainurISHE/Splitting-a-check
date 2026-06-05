import { Component, inject } from '@angular/core';
import { UsersList } from '../../components/users-list/users-list';
import { BillStoreService } from '../../core/store/bill-store.service';
import { BillItemsList } from '../../components/bill-items-list/bill-items-list';
import { ItemAssignment } from '../../components/item-assignment/item-assignment';
import { ReceiptApiService } from '../../core/store/receipt-api.service';

@Component({
  selector: 'app-split-bill-page',
  imports: [UsersList, BillItemsList, ItemAssignment],
  standalone: true,
  templateUrl: './split-bill.page.html',
  styleUrl: './split-bill.page.css',
})
export class SplitBillPage {
  store = inject(BillStoreService);
  api = inject(ReceiptApiService);

  constructor() {
    this.api.getReceipt().subscribe({
      next: (data) => {
        this.store.participants.set(data.participants);
        this.store.items.set(data.items);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
