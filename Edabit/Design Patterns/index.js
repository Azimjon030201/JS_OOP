function Book(author, published){
    this.author = author;
    this.published = published;
}
let Author = {
    name:"Erix Mariya Remark",
    books:["G'arbiy frontda o'zgarish yo'q","Ortga yo'l"]
}
let Publisher = new function(authors, books){
    this.authors = authors;
    this.books = books;
}

class Review{
    constructor(rating,user){
        this.rating = rating;
        this.user = user;
    }
}
(function Bookstore(books, price){
    this.books = books;
    this.price = price;
})("books","price");
