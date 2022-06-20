import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: 'Pandora', type: 'Cachorro'},
    {name: 'Xuxa', type: 'Gato'},
    {name: 'Kiara', type: 'Cachorro'},
    {name: 'Bob', type: 'Cavalo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
