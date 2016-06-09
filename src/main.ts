import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { PROJECTNAMEAppComponent, environment } from './app/';



if (environment.production) {
  enableProdMode();
}

bootstrap(PROJECTNAMEAppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch((error: Error) => console.error(error));

