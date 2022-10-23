import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input()
  book: Book = { author: '', copies: 0, name: '', pages: 0 }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {}

  updateBook(book: Book) {
    this.bookService.updateBook(book)    
  }

}
