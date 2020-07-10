import { TestBed } from '@angular/core/testing';

import { PictureSelectorService } from './picture-selector.service';

describe('PictureSelectorService', () => {
  let service: PictureSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
