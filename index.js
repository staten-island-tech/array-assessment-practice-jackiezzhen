const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
const authorsandbooks = books.map((book) => ({
  Author: book.authorFirst + ' ' + book.authorLast,
  Book: book.name,
}));
console.log(authorsandbooks);

//"--- wrote --- in ---"
function author(first, last, title, date){
  return first + " " + last + " wrote " + title + " in " + date};
books.forEach((book) => {console.log(author(book.authorFirst, book.authorLast, book.titles, book.publishDate))});


console.log("Sort books from oldest to most recent")
const dateSort = books.sort((a,b) => a.publishDate - b.publishDate);
console.log(dateSort);



console.log("Sort books alphabetically")
const alphSort = titles.sort();
console.log(alphSort);

console.log("\nFind who wrote War and Peace")
const who = books
.filter((book) => (book.name === "War and Peace"))
.map((book) => ({Author: book.authorFirst + ' ' + book.authorLast}))

//how many books were written before 1900?

console.log("\nWas there at least one book published within the last 100 years?")

console.log("\nWas every book published within the last 100 years?")
const currentyr = new Date().getFullYear();
const differenceofyrs = currentyr - 100;
const yrs = books.filter((book) => book.publishDate <= differenceofyrs);
const dates = yrs.length;
function book(dates){
  if (dates === 10) {
    console.log('Every book was published within the last 100 years.');
  } else {
    console.log('Every book was not publish within the last 100 years');
  } 
}
book()

//print a list of books that "includes" the genre historical
console.log('\nPrint a list of books that "includes" the genre historical')
books.forEach((book) => {
  if (book.genre.includes("historical"))
  {
    console.log(book.name);
  }
});