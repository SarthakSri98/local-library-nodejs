import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(private _baseService : BaseService) { }
  authorList:any;
  ngOnInit() {
    this._baseService.getAuthorList().subscribe(res=>{
      this.authorList = res.data;
      console.log(this.authorList.data);
   });
  }

}
