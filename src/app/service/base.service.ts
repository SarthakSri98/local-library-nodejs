import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http : HttpClient) { }

  getCountings()
  {
    return this.http.get<{ title:string, error:string , data:{} }>('http://localhost:8000/catalog');

  }
  
  getBookList()
  {
    return this.http.get<{ title:string, error:string , data:{} }>('http://localhost:8000/catalog/books');
  
  }
  // getBookInstance(id)
  // {
  //   return this.http.get<{ title:string, error:string , data:any }>('http://localhost:8000/catalog/books/'+id);

  // }
  getBookAvailibility()
  {
    return this.http.get<{ title:string, error:string , data:any }>('http://localhost:8000/catalog/bookinstances');
  }

  getAuthorList()
  {
    return this.http.get<{ title:string, error:string , data:any }>('http://localhost:8000/catalog/authors');
  }

  getGenreList()
  {
    return this.http.get<{ title:string, error:string , data:{} }>('http://localhost:8000/catalog/genres');
  
  }

  getGenreDetail(id)
  {
    console.log('service get genre detail',id);
    return this.http.get<{ title:string, error:string , data:{} }>('http://localhost:8000/catalog/genre/'+id);

  }
  getBookDetail(id)
  {
    return this.http.get<{ title:string , data:{} }>('http://localhost:8000/catalog/book/'+id);

  }
  getAuthorDetail(id)
  {
    return this.http.get<{ title:string , data:{} }>('http://localhost:8000/catalog/author/'+id);
  }

  getBookInstanceDetail(id)
  {
    return this.http.get<{ title:string , data:{} }>('http://localhost:8000/catalog/bookinstance/'+id);
  }

  addGenre(value)
  {
    console.log(value);
    return this.http.post('http://localhost:8000/catalog/genre/create',value);
  }

  addAuthor(value)
  {
    console.log(value);
    return this.http.post('http://localhost:8000/catalog/author/create',value);
  }


}
