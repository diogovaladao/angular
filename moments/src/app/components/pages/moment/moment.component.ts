import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/service/moment.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/service/messages.service';
import { ComentService } from 'src/app/service/coment.service';
import { Comment } from 'src/app/Comment';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;

  constructor(
    private momentService:MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private commentService: ComentService,
    ) { }

  ngOnInit(): void {
    //pegar id da url
    const id = Number(this.route.snapshot.paramMap.get("id"));

    /* carregamento do dado */
    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    })
  }

  get text(){
    return this.commentForm.get("text")!;
  }

  get username(){
    return this.commentForm.get("username")!;
  }

  /* excluí momento */
  async removeHandler(id: number){
    await this.momentService.removeMoments(id).subscribe();
    this.messageService.add("Momento excluído com sucesso!");
    this.router.navigate(['/']);
  }

  async onSubmit(form: FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);
    await this.commentService.creatComment(data).subscribe((comement) => this.moment!.comments?.push(comement.data));
    this.messageService.add("Comentário adicionado!");
    //resete de form
    this.commentForm.reset();
    form.resetForm();
  }
}
