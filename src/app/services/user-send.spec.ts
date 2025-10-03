import { TestBed } from '@angular/core/testing';

import { UserSend } from './user-send';

describe('UserSend', () => {
  let service: UserSend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
