
import {Headers } from "@angular/http";
import {Injectable} from "@angular/core";

import {Message } from "./ChatPart.model";


@Injectable()
export class MessageService {
	private messages: Message[]= [
		new Message('Hallo'),
		new Message('wie geht es dir'),
		new Message('toll, und selbst?'),		
	];
	
	getMessages() {
		return this.messages;
	}
	
	addMessage(message: Message) {
		this.messages.push(message);
	}
}