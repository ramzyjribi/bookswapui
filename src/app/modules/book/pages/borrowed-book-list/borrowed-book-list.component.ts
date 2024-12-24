import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../../services/services/book.service';
import {PageResponseBorrowedBookResponse} from '../../../../services/models/page-response-borrowed-book-response';
import {BorrowedBookResponse} from '../../../../services/models/borrowed-book-response';
import {BookResponse} from '../../../../services/models/book-response';
import {FeedbackRequest} from '../../../../services/models/feedback-request';
import {FeedbackService} from '../../../../services/services/feedback.service';
import {borrowedbooks} from "../borrowedbooks";
import {feedbaks} from "../feedbacks";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrls: ['./borrowed-book-list.component.scss']
})
export class BorrowedBookListComponent implements OnInit {
  page = 0;
  size = 5;
  pages: any = [];
  borrowedBooks: PageResponseBorrowedBookResponse = {};
  borrowed : BorrowedBookResponse[] = borrowedbooks;
  selectedBook: BookResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = {bookId: 0, comment: '', note: 0};
  feedbacks : FeedbackRequest[] = feedbaks;
  constructor(
    private bookService: BookService,
    private feedbackService: FeedbackService,
    private toastr: ToastrService
  ) {
  }
  ngOnInit(): void {
    this.findAllBorrowedBooks();
  }

  private findAllBorrowedBooks() {
    this.bookService.findAllBorrowedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.borrowedBooks = resp;
        this.pages = Array(this.borrowedBooks.totalPages)
          .fill(0)
          .map((x, i) => i);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllBorrowedBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedBooks();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBorrowedBooks();
  }

  goToLastPage() {
    this.page = this.borrowedBooks.totalPages as number - 1;
    this.findAllBorrowedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedBooks();
  }

  get isLastPage() {
    return this.page === this.borrowedBooks.totalPages as number - 1;
  }

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = book;
    this.feedbackRequest.bookId = book.id as number;
  }

  returnBook(withFeedback: boolean) {
    if (withFeedback) {
      this.toastr.success('The book is returned. Your comment and rating have been saved');
      feedbaks.push(this.feedbackRequest);
      console.log(this.feedbackRequest);
      this.toastr.success('The book is returned. Your comment and rating have been saved');
    }
    else {
      this.toastr.success('The book is returned');
      this.toastr.success('The book is returned');
    }
  }

  private giveFeedback() {

  }
}
