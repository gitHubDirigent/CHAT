import { Routes, RouterModule } from "@angular/router";

import { ChatPartComponent } from "./chatPart/ChatPart.component";
import { LoginPartComponent } from "./loginPart/LoginPart.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginPartComponent },
  { path: 'chat', component: ChatPartComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

