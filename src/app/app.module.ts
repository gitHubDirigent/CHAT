import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginPartComponent } from "./loginPart/LoginPart.component";
import { ChatPartComponent } from "./chatPart/ChatPart.component";
//import { ChatService } from "./chatPart/ChatService.component";

@NgModule({
  declarations: [
	AppComponent, 	
	LoginPartComponent, 
	ChatPartComponent
	],
  imports: [
    BrowserModule, 
    FormsModule, 
    routing
	],
  providers: [//ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 