import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { FormGroup,FormControl } from '@angular/forms'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {
  genreForm;
  title = "Genre Form";
  @ViewChild('name') input: ElementRef;
  constructor(private _baseService : BaseService) { }

  ngOnInit() {
    this.genreForm = new FormGroup({
      name : new FormControl('')
    })
    console.log('create genre form');
  }


  addGenreValue()
  {
    console.log(this.genreForm.value);
  this._baseService.addGenre(this.genreForm.value).subscribe(()=>{
    console.log("posted");
  });
  }
  
}
