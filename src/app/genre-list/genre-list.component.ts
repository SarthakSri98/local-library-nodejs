import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Router, Route } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  constructor(private _baseService : BaseService,private router:Router) { }
  genreList:any;
  ngOnInit() {
    this._baseService.getGenreList().subscribe(res=>{
      this.genreList = res.data;
      console.log(this.genreList.data);
   });
  }
 
}
