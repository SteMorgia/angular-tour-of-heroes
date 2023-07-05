import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {


  constructor(public messageService: MessageService) { }


  get lastMessage(): string {
    const messages = this.messageService.messages;
    return messages.length > 0 ? messages[messages.length - 1] : '';
  }

  clearMessages() {
    this.messageService.clear();
  }

}


