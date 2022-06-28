import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar!';
  constructor() { }

  ngOnInit(): void {
  }

  /* método para tratar os dados que chegam do componente filho */
  async creatHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append("iamge", moment.image);
    }
  }
}
