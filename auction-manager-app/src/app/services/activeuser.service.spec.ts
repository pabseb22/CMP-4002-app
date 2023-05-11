import { TestBed } from '@angular/core/testing';

import { ActiveuserService } from './activeuser.service';

describe('ActiveuserService', () => {
  let service: ActiveuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
