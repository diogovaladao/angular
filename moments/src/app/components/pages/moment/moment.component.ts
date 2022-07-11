import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/service/moment.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService:MomentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pegar id da url
    const id = Number(this.route.snapshot.paramMap.get("id"));


    /* carregamento do dado */
    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data));
  }

}