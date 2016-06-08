import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PROJECTNAMEAppComponent } from '../app/project-name.component';

beforeEachProviders(() => [PROJECTNAMEAppComponent]);

describe('App: PROJECTNAME', () => {
  it('should create the app',
      inject([PROJECTNAMEAppComponent], (app: PROJECTNAMEAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'project-name works!\'',
      inject([PROJECTNAMEAppComponent], (app: PROJECTNAMEAppComponent) => {
    expect(app.title).toEqual('project-name works!');
  }));
});
