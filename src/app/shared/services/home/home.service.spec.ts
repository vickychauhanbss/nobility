import { inject, TestBed } from '@angular/core/testing';

import { homeService } from "./home.service";

describe('ValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [homeService]
    });
  });

  it('should be created', inject([homeService], (service: homeService) => {
    expect(service).toBeTruthy();
  }));
});
