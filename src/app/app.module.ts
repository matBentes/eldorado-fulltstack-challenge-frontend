import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
