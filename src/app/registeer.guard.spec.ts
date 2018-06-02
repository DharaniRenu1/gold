import { TestBed, async, inject } from '@angular/core/testing';

import { RegisteerGuard } from './registeer.guard';

describe('RegisteerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteerGuard]
    });
  });

  it('should ...', inject([RegisteerGuard], (guard: RegisteerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
