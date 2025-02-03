// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

// Find all products with price greater than 20.
// Get the names of all products of Category Food, that are on discount.
// Get the price of all products that are on discount.
// Find the name and price of all products with name starting with a vowel, that are not on discount.

// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
function Product(name, category, hasDiscount, price) {
  (this.name = name),
    (this.category = category),
    (this.hasDiscount = hasDiscount),
    (this.price = price);
}

// Create an array of 15 products.
let products = [
  new Product("Apple", "Food", true, 22),
  new Product("Banana", "Food", false, 50),
  new Product("Chicken Breast", "Food", true, 155),
  new Product("Yogurt", "Food", false, 15),
  new Product("Shampoo", "Personal Care", true, 32),
  new Product("Toothpaste", "Personal Care", false, 75),
  new Product("Dish Soap", "Household", true, 30),
  new Product("Laundry Detergent", "Household", false, 80),
  new Product("Notebook", "Stationery", true, 20),
  new Product("Pens", "Stationery", false, 15),
  new Product("Batteries", "Electronics", true, 50),
  new Product("Light Bulb", "Electronics", false, 35),
  new Product("Water Bottle", "Beverages", true, 10),
  new Product("Orange Juice", "Beverages", false, 40),
  new Product("Paper Towels", "Household", true, 60),
];

// Find all products with price greater than 20.
let greaterThanTwenty = products.filter((p) => p.price > 20);
console.log(greaterThanTwenty);

// Get the names of all products of Category Food, that are on discount.
let namesOfCategoryFood = products
  .filter((p) => p.category == "Food")
  .filter((p) => p.hasDiscount == true);
console.log(namesOfCategoryFood);

// Get the price of all products that are on discount.
let productsOnDiscount = products
  .filter((p) => p.hasDiscount == true)
  .forEach((p) => console.log(p.price));

// Find the name and price of all products with name starting with a vowel, that are not on discount.

let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

let productsStartingWithVowelAndNotOnDiscount = products
  .filter((p) => vowels.includes(p.name[0]))
  .filter((p) => p.hasDiscount == false)
  .map((p) => ({
    name: p.name,
    price: p.price,
  }));
console.log(productsStartingWithVowelAndNotOnDiscount);
