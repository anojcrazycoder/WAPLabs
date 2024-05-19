const Book = require('../models/book');

// Get a single book by ID
exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const book = Book.getBookById(bookId);

    if (!book) {
        return res.status(404).json({ error: `Book not found with ID: ${bookId}` });
    }

    res.json(book);
};

// Add a new book
exports.addBook = (req, res) => {
    const { title, author } = req.body;

    if (!title || !author || !author.authorId || !author.firstname || !author.lastname) {
        return res.status(400).json({ error: 'Invalid book data' });
    }

   let book = new Book();
    const newBook =  book.addBook({ title, author });
   
    res.status(201).json(newBook);
};

// Get books by author's first name
exports.getBooksByAuthorFirstname = (req, res) => {
    const { firstname } = req.query;

    if (!firstname) {
        return res.status(400).json({ error: 'Firstname query parameter is required' });
    }

    const books = Book.getBooksByAuthorFirstname(firstname);
    res.json(books);
};
