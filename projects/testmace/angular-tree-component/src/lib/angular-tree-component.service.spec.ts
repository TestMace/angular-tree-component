import { TestBed } from '@angular/core/testing';

import { AngularTreeComponentService } from './angular-tree-component.service';

describe('AngularTreeComponentService', () => {
  let service: AngularTreeComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTreeComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
