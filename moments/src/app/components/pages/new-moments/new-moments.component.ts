import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/service/moment.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar!';
  constructor(
    private momentService: MomentService,
    private router: Router,
    private messageService: MessagesService,
    ) { }

  ngOnInit(): void {
  }

  /* método para tratar os dados que chegam do componente filho */
  async creatHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append("image", moment.image);
    }

    /* envia o formulário para o moment.service para salvar na base de dados */
    await this.momentService.createMoment(formData).subscribe();
    this.messageService.add("Momento cadastrado com sucesso!");
    this.router.navigate(['/']);
  }
  
}
