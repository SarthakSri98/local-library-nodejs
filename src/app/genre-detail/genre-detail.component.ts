import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  id :string;
  result:any;
  constructor(private _baseService : BaseService,private router:ActivatedRoute) { }
  genreList:any;
  ngOnInit() {
   this.id = this.router.snapshot.params.id;
   this.getDetailOfGenre();
  }

   getDetailOfGenre()
   {
     this._baseService.getGenreDetail(this.id).subscribe(res=>{
       this.result = res;
       console.log(this.result);
     })
   }

}
