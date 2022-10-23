import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { Book } from '../book';
import { BookService } from '../book.service';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: Book[] = []

  @ViewChild(AddBookComponent, { static: true })
  child!: AddBookComponent;

  @ViewChild(AddBookComponent, { static: true })
  childEdit!: EditBookComponent;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.bookService.getBook().subscribe((books) => this.books = books)
  }

  addBookFromChild() {
    this.child.addBook(this.child.book).subscribe((data) => this.books.push(data))
  }

  deleteBookFromChild(isbn: string) {
    this.child.deleteBook(isbn)
  }

  updateBookFromChild(book: Book) {  
    this.childEdit.updateBook(book)
  }

  confirmDelete(isbn: string, index: number) {
    if (confirm("Are you sure to delete?")) { 
      this.deleteBookFromChild(isbn)
      this.books.splice(index, 1)
    }
  }
}
