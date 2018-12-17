import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rdetail',
  templateUrl: './rdetail.component.html',
  styleUrls: ['./rdetail.component.css']
})
export class RdetailComponent implements OnInit {
  param: number;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.param = params['id']
    })
  }

}
