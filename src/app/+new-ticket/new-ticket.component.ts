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
	ticket: any = {};
  constructor(private _formBuilder: FormBuilder) {
		this.fees = [1, 2, 3];

		this.newTicketForm = this._formBuilder.group({
			'soNumber': ['', Validators.required],
			'basNumber': ['', Validators.required],
			'cardnumber':['', Validators.required],
			'customername': ['', Validators.required],
			'upliftdate': ['', Validators.required],
			'usg': ['', Validators.required],
			'quality': ['', Validators.required],
			'tailnumber': ['', Validators.required],
			'flightNumber': ['', Validators.required],
			'authorizationNumber': ['', Validators.required],
			'ticketNumber': ['', Validators.required],
			'notes': ['', Validators.required]
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
  saveTicket() {
		console.log(this.newTicketForm.value);
  }

  ngOnInit() {
  }

}
