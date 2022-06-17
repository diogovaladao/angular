import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name: String = '';
  @Input() idade!: number;
  @Input() userData!: {email: String, perfil: String};

  constructor() { }

  ngOnInit(): void {
  }

}
