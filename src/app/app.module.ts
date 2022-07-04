import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LoginPartComponent } from "./loginPart/LoginPart.component";
import { ChatPartComponent } from "./chatPart/ChatPart.component";

@NgModule({
  declarations: [LoginPartComponent, ChatPartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule {}
