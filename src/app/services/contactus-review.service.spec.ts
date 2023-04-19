import { TestBed } from '@angular/core/testing';

import { ContactusReviewService } from './contactus-review.service';

describe('ContactusReviewService', () => {
  let service: ContactusReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
