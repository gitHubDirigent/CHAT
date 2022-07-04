import { Routes, RouterModule } from "@angular/router";

import { ChatComponent } from "./chatPart/chat-part.component";
import { LoginComponent } from "./loginPart/login-part.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent }
  { path: 'chat', component: ChatComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

