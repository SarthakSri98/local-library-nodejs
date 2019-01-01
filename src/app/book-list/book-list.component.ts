import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private _baseService : BaseService) { }
  bookList:any;
  bookAvailibility:any;
  ngOnInit() {
    this._baseService.getBookList().subscribe(res=>{
      console.log(res);
      this.bookList = res.data;
   });  

    
  }



}
