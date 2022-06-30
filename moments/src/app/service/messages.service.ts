import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  /* variável que receberá a mensagem a ser exibida, se estiver vazia nada será exibido */
  message: string = "";

  constructor() { }
}
