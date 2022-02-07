import { TestBed } from '@angular/core/testing';

import { PatchNoteServiceService } from './patch-note-service.service';

describe('PatchNoteServiceService', () => {
  let service: PatchNoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatchNoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
