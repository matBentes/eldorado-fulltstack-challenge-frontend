import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  book: Book = { author: '', copies: 0, name: '', pages: 0 };

  form: FormGroup;
  submitted = false;
  createdBook = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.book.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(190),
      ]),
      author: new FormControl(this.book.author, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
      pages: new FormControl(this.book.author, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
      copies: new FormControl(this.book.author, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
    });
  }

  addBook(book: Book) {
    return this.bookService.addBook(book).subscribe();
  }

  deleteBook(isbn: string) {
    this.bookService.deleteBook(isbn).subscribe((_) => console.log('deleted'));
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.addBook(this.form.value);
      this.createdBook = true;
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel');
  }
}
