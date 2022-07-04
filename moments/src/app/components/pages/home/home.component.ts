import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/service/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSadCry, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []; /* variável para pegar informações na base */
  moments: Moment[] = []; /* variável para filtro que será exibido depois da busca */
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = "";

  constructor(private momentsService: MomentService) { }

  ngOnInit(): void {
    this.momentsService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
    
  /* método para pesquisa na base de dados */
  search(e: Event): void{
    const target = e.target as HTMLInputElement; /* passos para pegar informação do HTML */
    const value = target.value;

    this.moments = this.allMoments.filter(moment => moment.title.toLowerCase().includes(value));
  }

}
