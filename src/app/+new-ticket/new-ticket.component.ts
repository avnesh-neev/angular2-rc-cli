import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-new-ticket',
  templateUrl: 'new-ticket.component.html',
  styleUrls: ['new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
	fees: any;
  constructor() {
		this.fees = [1, 2, 3];
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
