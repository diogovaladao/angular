import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  size = 40;
  font = 'Arial';
  color = 'blue';
  classes = ['green-title', 'small-title'];
  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
