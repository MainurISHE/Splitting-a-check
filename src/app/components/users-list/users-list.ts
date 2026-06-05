import { Component, input, output, signal } from '@angular/core';
import { Participant } from '../../core/models/participant.model';

@Component({
  selector: 'app-users-list',
  imports: [],
  standalone: true,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  participants = input.required<Participant[]>();
  remove = output<string>();
  add = output<string>();
  newUserName = signal('');

  handleAdd() {
    if (!this.newUserName().trim()) {
      return alert('User name cannot be empty');
    }
    this.add.emit(this.newUserName());
    this.newUserName.set('');
  }

}
