import {BorrowedBookResponse} from "../../../services/models/borrowed-book-response";

export var borrowedbooks : BorrowedBookResponse[] =  [
  {
    id :1,
    authorName :"J.K. Rowling",
    isbn : "9780747532743",
    rate: 4.8,
    title: "Harry Potter and the Philosopher's Stone",
    returnApproved : true,
    returned : false

  },
  {
    id :2,
    authorName :"J.R.R. Tolkien",
    isbn : "12850747535785",
    rate: 4.8,
    title: "The Lord of the Rings",
    returnApproved : true,
    returned : false

  },
  {
    id :3,
    authorName :"George Orwell",
    isbn : "9780747532743",
    rate: 4,
    title: "1984",
    returnApproved : true,
    returned : true

  },
  {
    id :4,
    authorName :"Harper Lee",
    isbn : "9780747532743",
    rate: 4.8,
    title: "To Kill a Mockingbird",
    returnApproved : false,
    returned : false

  }


]
