const books = ["1983", "Strong Mindset", "43 powers"];
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}
console.log(foundBook?.length);
