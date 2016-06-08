import { Component, Directive, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'project-name-app',
  templateUrl: 'project-name.component.html',
  styleUrls: ['project-name.component.css'],
  directives: [ HeaderComponent, ContainerComponent, FooterComponent, ROUTER_DIRECTIVES]
,
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent}
])
export class PROJECTNAMEAppComponent {
  title = 'project-name works!';
  constructor(private router:Router) {}
}
