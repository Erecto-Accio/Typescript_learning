let car: { brand: string; year: number } = { brand: "toyota", year: 2023 };
console.log(car);

let car1: { brand: string; year: number } = { brand: "audi", year: 2024 };
console.log(car1);

// object with array
let book = { title: "book", cost: 20 };
let pen = { title: "All time pen", cost: 6 };
let noteBook = { title: "Bashundhara khata" };

let items: { title: string; cost?: number }[] = [book, pen, noteBook];
console.log(items);
