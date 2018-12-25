import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from '../service/base.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-instance',
  templateUrl: './book-instance.component.html',
  styleUrls: ['./book-instance.component.css']
})
export class BookInstanceComponent implements OnInit {
  bookAvailibility:any;
  constructor(private _baseService : BaseService,private route : ActivatedRoute) { }
  bookList:any;
  ngOnInit() {
    this._baseService.getBookAvailibility().subscribe(res=>{
      this.bookAvailibility = res.data;
})
}
}
