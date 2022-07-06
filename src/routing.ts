import { Routes, RouterModule } from "@angular/router";

import { ChatPartComponent } from "./app/ChatPart.component";
import { LoginPartComponent } from "./app/LoginPart.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat', component: ChatPartComponent },
  { path: 'login', component: LoginPartComponent },  
];

export const routing = RouterModule.forRoot(APP_ROUTES);


