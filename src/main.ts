import './polyfills.ts';

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { LoginPartComponent } from "./app/loginPart/LoginPart.component";
import { environment } from "./environments/environment";
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
