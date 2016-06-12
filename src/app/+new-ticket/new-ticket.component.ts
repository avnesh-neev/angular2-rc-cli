import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { ValidationControlMessageComponent } from '../validation-control-message/validation-control-message.component';
import { ValidationService } from '../validation-control-message/validation-control-message.service';


@Component({
  moduleId: module.id,
  selector: 'app-new-ticket',
  templateUrl: 'new-ticket.component.html',
  styleUrls: ['new-ticket.component.css'],
  directives: [ValidationControlMessageComponent]
})
export class NewTicketComponent implements OnInit {
	fees: any;
	newTicketForm: any;
  constructor(private _formBuilder: FormBuilder) {
		this.fees = [1, 2, 3];

		this.newTicketForm = this._formBuilder.group({
			'customername': ['', Validators.required]
    });
  }

  deleteFee(index) {
		console.log(this.fees+" index: ", index);
		let indexOfClickedFee = this.fees.indexOf(index);
		console.log("index: ", indexOfClickedFee);

		if (indexOfClickedFee > -1) {
			console.log(this.fees, indexOfClickedFee);
		    this.fees.splice(indexOfClickedFee, 1);
				console.log(this.fees, indexOfClickedFee);
		}
  }

	addFee() {
		this.fees.push(this.fees.length)
		console.log(this.fees);
  }

  ngOnInit() {
  }

}
