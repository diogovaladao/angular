import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: String = 'Diogo';
  idade = 34;
  hobbie = ["Poker", "Video Game", "Jogar futebol", "Ouvir Música"];
  veiculo = {
    tipo: 'moto',
    marca: 'Honda',
    ano: 2018
  }

  constructor() { }

  ngOnInit(): void {
  }
}
