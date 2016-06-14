import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ConfigUrlService } from './config-url.service';

describe('ConfigUrl Service', () => {
  beforeEachProviders(() => [ConfigUrlService]);

  it('should ...',
      inject([ConfigUrlService], (service: ConfigUrlService) => {
    expect(service).toBeTruthy();
  }));
});
