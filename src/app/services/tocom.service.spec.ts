import { TestBed, inject } from '@angular/core/testing';

import { TocomService } from './tocom.service';

describe('TocomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TocomService]
    });
  });

  it('should be created', inject([TocomService], (service: TocomService) => {
    expect(service).toBeTruthy();
  }));
});
