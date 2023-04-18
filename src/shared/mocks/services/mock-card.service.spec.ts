import { TestBed } from '@angular/core/testing';

import { MockCardService } from './mock-card.service';

describe('MockCardService', () => {
  let service: MockCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
