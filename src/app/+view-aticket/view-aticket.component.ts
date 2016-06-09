import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-view-aticket',
  templateUrl: 'view-aticket.component.html',
  styleUrls: ['view-aticket.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ViewATicketComponent implements OnInit {
	id: string;
  constructor(routeSegment: RouteSegment) {
    if (routeSegment.getParam('id')) {
        this.id = decodeURIComponent(routeSegment.getParam('id'));
        console.log("params: ", this.id);
    }
  }

  ngOnInit() {}

}
