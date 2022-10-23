import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBook().subscribe((books) => (this.books = books));
  }

  confirmDelete(isbn: string, index: number) {
    if (confirm('Are you sure to delete?')) {
      this.bookService.deleteBook(isbn).subscribe();
      this.books.splice(index, 1);
    }
  }
}
