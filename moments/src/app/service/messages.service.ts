import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  /* variável que receberá a mensagem a ser exibida, se estiver vazia nada será exibido */
  message: string = "";

  add(mensagem: string){
    this.message = mensagem;
    
    setTimeout(() => {
      this.clear();
    }, 4000)
  }

  clear(){
    this.message = "";
  }
  constructor() { }
}
