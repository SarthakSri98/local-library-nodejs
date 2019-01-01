import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  authorForm;
  title = "Author Form";
  constructor(private _baseService : BaseService) { }

  ngOnInit() {
    this.authorForm = new FormGroup({
      first_name : new FormControl(''),
      last_name : new FormControl(''),
      date_of_birth : new FormControl(''),
      date_of_death : new FormControl('')

    })
    console.log('create genre form');
  }


  addAuthorValue()
  {
    console.log(this.authorForm.value);
  this._baseService.addAuthor(this.authorForm.value).subscribe(()=>{
    console.log("posted");
  });
  }
}
