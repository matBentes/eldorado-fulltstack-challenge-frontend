import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: Book[] = []

  @ViewChild(AddBookComponent, { static: true })
  child!: AddBookComponent;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.bookService.getBook().subscribe((books) => this.books = books)
  }

  addBookFromChild() {
    this.child.addBook(this.child.book)
  }

  deleteBookFromChild(isbn: string) {
    this.child.deleteBook(isbn)
  }
}
