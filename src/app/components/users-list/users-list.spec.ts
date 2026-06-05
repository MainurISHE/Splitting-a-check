import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersList);

    fixture.componentRef.setInput('participants', []);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('UsersList', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
