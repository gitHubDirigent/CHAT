import { Routes, RouterModule } from "@angular/router";

import { ChatPartComponent } from "./app/chatPart";
import { LoginPartComponent } from "./app/loginPart";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat', component: ChatPartComponent },
//  { path: 'login', component: loginPartComponent },  
];

export const routing = RouterModule.forRoot(APP_ROUTES);


