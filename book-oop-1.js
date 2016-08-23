// Use a constructor function
function Book(title, author, numPages) {
     this.title = title;
     this.author = author;
     this.numPages = numPages;
     this.currentPage = 0;
}

//Create a method on the object
Book.prototype.read = function() {
     this.currentPage = this.numPages;
     console.log("You read " + this.numPages + " pages!");
}

//Instantiating a new object
var book = new Book("Robot Dreams", "Isaac Asimov", 320);

book.read();

// Use a constructor function
function Book(title, author, numPages) {
     this.title = title;
     this.author = author;
     this.numPages = numPages;
     this.currentPage = 0;
}

//Create a method on the object
Book.prototype.read = function() {
     this.currentPage = this.numPages;
     console.log("You read " + this.numPages + " pages!");
}

//Instantiating a new object
var book = new Book("Robot Dreams", "Isaac Asimov", 320);

book.read();

//Constructor function
function PaperBack(title, author, numPages, cover) {
     Book.call(this, title, author, numPages);
     this.cover = cover;
}
//Extending the Book object
PaperBack.prototype = Object.create(Book.prototype);

//A new method on this object
PaperBack.prototype.burn = function() {
     console.log("Omg, you burnt all " + this.numPages + " pages");
     this.numPages = 0;
}

//Instantiating a new object
var paperback = new PaperBack("1984", "George Orwell", 250, "cover.jpg" );
paperback.read();
paperback.burn();
