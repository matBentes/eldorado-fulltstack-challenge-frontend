import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Injectable({
  providedIn: 'root',
})
export class BookResolverGuard implements Resolve<Book> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    if (route.params && route.params['isbn']) {
      return this.bookService.loadByIsbn(route.params['isbn']);
    }

    return of({ isbn: '', name: '', author: '', copies: 0, pages: 0 });
  }
}
