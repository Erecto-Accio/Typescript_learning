let bike: { brand: string; price: number } = { brand: "Ducati", price: 675000 };
// bike.price = "$65000";
console.log(bike);

let laptop: { brand: string; price: number } = {
  brand: "Samsung",
  price: 1235678,
};
// laptop.price = "125000";
console.log(laptop);

// adding three objects to one array
let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pant" };

let products: { brand?: string; title?: string; price?: number }[] = [
  product1,
  product2,
  laptop,
  bike,
];
console.log(products);
