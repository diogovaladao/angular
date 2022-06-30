import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /* variável para aparecer ícone no popup de mensagem */
  faTimes = faTimes;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
