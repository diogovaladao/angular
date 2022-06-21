import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  
  animals: Animal[] = [
    {name: 'Pandora', type: 'Cachorro', age: 7},
    {name: 'Xuxa', type: 'Gato', age: 5},
    {name: 'Kiara', type: 'Cachorro', age: 2},
    {name: 'Bob', type: 'Cavalo', age: 15},
  ]

  detalheAnimal = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  mostraIdade(animal: Animal): void {
    this.detalheAnimal = `${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...")
    this.animals = this.listService.remove(this.animals, animal);
  }

}
