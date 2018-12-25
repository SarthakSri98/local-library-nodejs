import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _baseService : BaseService) { }
  result:any;
  ngOnInit() {
    this._baseService.getCountings().subscribe(res=>{
      this.result = res;
      console.log(this.result.data.book_count);
   });
  }

  


}
