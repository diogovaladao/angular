import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  textoQualquer = "TESTANDO PIPE OPERATOR";
  novaData = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
