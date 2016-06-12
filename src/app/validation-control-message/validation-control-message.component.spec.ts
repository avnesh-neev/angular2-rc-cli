import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ValidationControlMessageComponent } from './validation-control-message.component';

describe('Component: ValidationControlMessage', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ValidationControlMessageComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ValidationControlMessageComponent],
      (component: ValidationControlMessageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ValidationControlMessageComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ValidationControlMessageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-validation-control-message></app-validation-control-message>
  `,
  directives: [ValidationControlMessageComponent]
})
class ValidationControlMessageComponentTestController {
}

