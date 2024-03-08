import { TestBed } from '@angular/core/testing';

import { TituloGlobalService } from './titulo-global.service';

describe('TituloGlobalService', () => {
  let service: TituloGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
