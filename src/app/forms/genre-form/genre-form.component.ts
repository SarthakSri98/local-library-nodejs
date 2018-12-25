import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {
  @ViewChild('name') input: ElementRef;
  constructor(private _baseService : BaseService) { }

  ngOnInit() {
  }

  addGenreValue()
  {
  this._baseService.addGenre(this.input.nativeElement.value).subscribe(()=>{
    console.log("posted");
  })
  }
  
}
