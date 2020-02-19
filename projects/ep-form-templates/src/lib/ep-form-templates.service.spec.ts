import { TestBed } from '@angular/core/testing';

import { EpFormTemplatesService } from './ep-form-templates.service';

describe('EpFormTemplatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpFormTemplatesService = TestBed.get(EpFormTemplatesService);
    expect(service).toBeTruthy();
  });
});
