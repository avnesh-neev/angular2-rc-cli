import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';

import { TicketService } from './view-tickets.service';


@Component({
  moduleId: module.id,
  selector: 'app-view-tickets',
  templateUrl: 'view-tickets.component.html',
  styleUrls: ['view-tickets.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TicketService]
})
export class ViewTicketsComponent implements OnInit {
	costomers: any;
	tickets: any;
	errorMessage: any;

  constructor(private _ticketService: TicketService) {}
  
  /**
   * [getAllTickets description: will get all tickets using get method]
   */
	getAllTickets() {
		this._ticketService.getTickets()
			.subscribe(
			(tickets) => this.tickets = tickets,
			error => this.errorMessage = <any>error,
			() => { console.log(this.tickets);}
		);
	}

  ngOnInit() {
		this.getAllTickets();
  }

}
