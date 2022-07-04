import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { LoginPartComponent } from "./app/loginPart/LoginPart.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(LoginPartComponent)
  .catch((err) => console.log(err));
