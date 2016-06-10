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
		this.costomers = [1, 2, 3, 4];
  }

  ngOnInit() {
  }

}
