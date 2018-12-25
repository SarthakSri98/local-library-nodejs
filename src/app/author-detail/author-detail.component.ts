import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  constructor(private _baseService:BaseService , private router : ActivatedRoute) { }
  authorDetail:any;
  ngOnInit() {
    this.getAuthorDetail();
  }
  
  getAuthorDetail()
  {
     this._baseService.getAuthorDetail(this.router.snapshot.params.id).subscribe(res=>{
       console.log(res);
       this.authorDetail = res;
     })
  }

}
