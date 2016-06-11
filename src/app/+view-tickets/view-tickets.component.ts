import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-view-tickets',
  templateUrl: 'view-tickets.component.html',
  styleUrls: ['view-tickets.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ViewTicketsComponent implements OnInit {
	costomers: any;
  constructor() {
		this.costomers = [
			{
				id:'1', 
				customer_name: "Zest Corporation",
				ticket_id: "1003",
				tail_no: "ZA56XZ",
				product: "JET FUEL",
				upliftdate: "05/22/2016"
			},
			{
				id:'2', 
				customer_name: "AM AVIATION inc",
				ticket_id: "1002",
				tail_no: "F3338N",
				product: "JET FUEL",
				upliftdate: "05/22/2016"
			},
			{
				id:'3', 
				customer_name: "Orest AVIATION inc",
				ticket_id: "1001",
				tail_no: "N121FN",
				product: "JET FUEL",
				upliftdate: "05/22/2016"
			}
		];
  }

  ngOnInit() {
  }

}
