import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginPartComponent } from "./loginPart/LoginPart.component";
import { ChatPartComponent } from "./chatPart/ChatPart.component";
import { HeaderComponent } from "./HeaderComponent.component";
import { MessageComponent } from "./MessageService.component";
//import { ChatService } from "./chatPart/ChatService.component";

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	LoginPartComponent, 
	ChatPartComponent
	],
  imports: [
    BrowserModule, 
    FormsModule, 
	ReactiveFormsModule,
    routing,
	HttpModule
	],
  providers: [//MessageService, UserListService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 