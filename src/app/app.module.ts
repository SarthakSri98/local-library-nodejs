import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule  } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookInstanceComponent } from './book-instance/book-instance.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { BookInstanceDetailComponent } from './book-instance-detail/book-instance-detail.component';
import { GenreFormComponent } from './forms/genre-form/genre-form.component';
const routes : Routes =[
  { path:'' , component: HomeComponent },
  { path:'booklist' , component: BookListComponent },
  { path:'bookInstance',component:BookInstanceComponent },
  { path:'authorList',component:AuthorListComponent },
  { path:'genreList',component:GenreListComponent},
  { path:'genre/:id',component:GenreDetailComponent},
  { path:'book/:id',component:BookDetailComponent},
  { path:'author/:id',component:AuthorDetailComponent},
  { path:'bookInstance/:id',component:BookInstanceDetailComponent},
  { path:'genreEditForm',component: GenreFormComponent },
  { path:'genreAddForm',component: GenreFormComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookInstanceComponent,
    AuthorListComponent,
    GenreListComponent,
    GenreDetailComponent,
    BookDetailComponent,
    AuthorDetailComponent,
    BookInstanceDetailComponent,
    GenreFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
