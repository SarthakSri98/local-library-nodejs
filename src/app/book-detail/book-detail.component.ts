import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id :string;
  result:any;
  constructor(private _baseService : BaseService,private router:ActivatedRoute) { }
  bookList:any;
  ngOnInit() {
   this.id = this.router.snapshot.params.id;
   console.log(this.id);
   this.getDetailOfBook();
  }

   getDetailOfBook()
   {
     this._baseService.getBookDetail(this.id).subscribe(res=>{
       this.result = res;
       console.log(this.result);
     })
   }
}
