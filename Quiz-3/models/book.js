let books =[];
let currentId=1;
module.exports = class Book {
    constructor() {
       
    }


   static getBookById(bookId) {
        return books.find(book => book.bookId === bookId);
    }

    addBook(book) {
        const newBook = {
            bookId: currentId++,
            ...book
        };
        books.push(newBook);
        return newBook;
    }

   static getBooksByAuthorFirstname(firstname) {
        return books.filter(book => book.author.firstname.toLowerCase().includes(firstname.toLowerCase()));
    }
}
