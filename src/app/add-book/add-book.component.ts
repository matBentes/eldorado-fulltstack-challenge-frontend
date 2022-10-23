import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book: Book = { author: '', copies: 0, name: '', pages: 0 }
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void { }

  addBook(book: Book) {
    return this.bookService.addBook(book)
  }

  deleteBook(isbn: string) {
    this.bookService.deleteBook(isbn).subscribe(_ => console.log("deleted"))    
  }
}
