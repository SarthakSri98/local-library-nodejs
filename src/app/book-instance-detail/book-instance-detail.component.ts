import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-instance-detail',
  templateUrl: './book-instance-detail.component.html',
  styleUrls: ['./book-instance-detail.component.css']
})
export class BookInstanceDetailComponent implements OnInit {

  constructor(private _baseService : BaseService , private router : ActivatedRoute) { }
  bookInstanceDetail : any;
  ngOnInit() {
    this.getBookInstanceDetail();
  }

  getBookInstanceDetail()
  {
    this._baseService.getBookInstanceDetail(this.router.snapshot.params.id).subscribe(res=>{
      console.log(res);
      this.bookInstanceDetail = res;
    })
  }

}
