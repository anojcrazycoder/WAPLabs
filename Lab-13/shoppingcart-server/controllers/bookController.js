
const Book = require('../models/book')
exports.getAll = (req,res)=>{
    res.status(200).json(Book.getAll());
}

exports.getById = (req,res,next)=>{
    res.status(200).json(Book.getBookById(parseInt(req.params.id)));
}

exports.save =(req,res,next)=>{
    let reqBody = req.body;
    const newBook = new Book(null,reqBody.title,reqBody.isbn,reqBody.publishedDate,reqBody.author);
    newBook.save();
    res.status(201).json(newBook);
}
exports.deleteById =(req,res,next)=>{
    res.status(200).json(Book.deleteById(parseInt(req.params.id)));
}

exports.updateById = (req,res,next)=>{
    let reqBody = req.body;
   new Book(null,reqBody.title,reqBody.isbn,reqBody.publishedDate,reqBody.author).update(parseInt(req.params.id));
  res.status(204).end();

}

