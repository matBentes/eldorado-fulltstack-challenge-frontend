import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { BookResolverGuard } from './guards/book-resolver.guard';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  {
    path: 'book/new',
    component: AddBookComponent,
    resolve: {
      book: BookResolverGuard,
    },
  },
  {
    path: 'book/edit/:isbn',
    component: AddBookComponent,
    resolve: {
      book: BookResolverGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
