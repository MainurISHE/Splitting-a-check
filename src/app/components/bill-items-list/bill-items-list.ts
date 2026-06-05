import { Component, input, output, signal } from '@angular/core';
import { BillItem } from '../../core/models/bill-item.model';

@Component({
  selector: 'app-bill-items-list',
  standalone: true,
  imports: [],
  templateUrl: './bill-items-list.html',
  styleUrl: './bill-items-list.css',
})


export class BillItemsList {
  items = input.required<BillItem[]>();
  remove = output<string>();
  add = output<BillItem>();

  newItemTitle = signal('');
  newItemPrice = signal(0);

  parsePrice(value: string) {
    return Number(value);
  }

  handleAdd() {
    if (!this.newItemTitle().trim()) {
      return alert('Item title cannot be empty');
    }
    if (this.newItemPrice() <= 0) {
      return alert('Item price must be greater than zero');
    }
    this.add.emit({
      title: this.newItemTitle(),
      price: this.newItemPrice(),
      id: crypto.randomUUID(),
      assignments: [],
    });

    this.newItemTitle.set('');
    this.newItemPrice.set(0);
  }

  handleRemove(id: string) {
    this.remove.emit(id);
  }
}
