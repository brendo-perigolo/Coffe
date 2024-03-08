import { TestBed } from '@angular/core/testing';

import { TituloSharedService } from './titulo-shared.service';

describe('TituloSharedService', () => {
  let service: TituloSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
