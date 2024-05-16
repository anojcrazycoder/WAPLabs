
let books =[
    {
        "id": 2,
        "title": "1984",
        "isbn": "978-0451524935",
        "publishedDate": "1949-06-08",
        "author": "George Orwell"
      },
      {
        "id": 3,
        "title": "To Kill a Mockingbird",
        "isbn": "978-0060935467",
        "publishedDate": "1960-07-11",
        "author": "Harper Lee"
      },
      {
        "id": 4,
        "title": "Pride and Prejudice",
        "isbn": "978-1503290563",
        "publishedDate": "1813-01-28",
        "author": "Jane Austen"
      },
      {
        "id": 5,
        "title": "The Great Gatsby",
        "isbn": "978-0743273565",
        "publishedDate": "1925-04-10",
        "author": "F. Scott Fitzgerald"
      },
      {
        "id": 6,
        "title": "Moby Dick",
        "isbn": "978-1503280786",
        "publishedDate": "1851-10-18",
        "author": "Herman Melville"
      },
      {
        "id": 7,
        "title": "War and Peace",
        "isbn": "978-1400079988",
        "publishedDate": "1869-01-01",
        "author": "Leo Tolstoy"
      },
      {
        "id": 8,
        "title": "The Catcher in the Rye",
        "isbn": "978-0316769488",
        "publishedDate": "1951-07-16",
        "author": "J.D. Salinger"
      },
      {
        "id": 9,
        "title": "The Chronicles of Narnia",
        "isbn": "978-0066238500",
        "publishedDate": "1956-10-16",
        "author": "C.S. Lewis"
      },
      {
        "id": 10,
        "title": "Brave New World",
        "isbn": "978-0060850524",
        "publishedDate": "1932-01-01",
        "author": "Aldous Huxley"
      },
      {
        "id": 11,
        "title": "Crime and Punishment",
        "isbn": "978-0486454115",
        "publishedDate": "1866-01-01",
        "author": "Fyodor Dostoevsky"
      }
];
let idCounter =3;

module.exports=class Book{
constructor(id,title,isbn,publishedDate,author){
    this.id = id;
    this.title =title;
    this.isbn = isbn;
    this.publishedDate =publishedDate;
    this.author=author;
}
static getAll(){
    return books;
}

static getBookById(id){
    const prod = books.find(p=>p.id ===id);
    if(prod){
        return prod;
    }
    else{
        throw new Error(`No Book found with Id: ${id}`);
    }
}
 save(){
    this.id = idCounter++;
    books.push(this);
    return this;
}

static deleteById(id){
    const index = books.findIndex(p=> p.id===id);
    if(index>-1){
        //books = books.filter(p=>p.id!==id);
        const temp = books[index];
        books.splice(index,1);
        return temp;
    }
    else{
        throw new Error(`No Book found with Id :${id}`);
    }
}
update(id){
    const index = books.findIndex(p=>p.id===id);
    if(index>-1){
        this.id = id;
        books[index] = this;
    }
    else{
        throw new Error(`No Book Found With Id: ${id}`);
    }
}


}
