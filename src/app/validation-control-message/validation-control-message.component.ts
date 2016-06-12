import { Component, OnInit, Host } from '@angular/core';
import { NgFormModel } from '@angular/common';
import { ValidationService } from './validation-control-message.service';

@Component({
  moduleId: module.id,
  selector: 'app-validation-control-message',
	inputs: ['controlName: control'],
	template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ValidationControlMessageComponent implements OnInit {

  controlName: string;
    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        let c = this._formDir.form.find(this.controlName);

        for (let propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }

  ngOnInit() {
		console.log("hello");
  }

}
