import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const book = this.route.snapshot.data['book'];

    this.form = new FormGroup({
      isbn: new FormControl(book.isbn),
      name: new FormControl(book.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(190),
      ]),
      author: new FormControl(book.author, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
      pages: new FormControl(book.pages, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
      copies: new FormControl(book.copies, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(190),
      ]),
    });
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
      this.createdBook = true;
      this.bookService
        .save(this.form.value)
        .subscribe({ complete: console.log, error: console.log });
      console.log(this.form.value.isbn);
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
