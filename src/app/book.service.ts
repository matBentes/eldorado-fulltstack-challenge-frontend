import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { catchError, retry, tap } from 'rxjs/operators'
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl = 'http://localhost:3333/book';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBook(): Observable<Book[]> {
    const books = this.http.get<Book[]>(this.bookUrl).pipe(tap((_) => 
    console.log("fetching book"), 
    catchError(this.handleError<Book[]>('getBooks', []))))


    console.log(books);
    console.log(this.http.get<Book[]>(this.bookUrl).subscribe(result => console.log(result)));
    
    
    return books 
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
