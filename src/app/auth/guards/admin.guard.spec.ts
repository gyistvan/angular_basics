import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';

describe('NotAuthorizedGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
