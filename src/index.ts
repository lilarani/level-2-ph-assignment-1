// problem-01

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}

formatString('Hello');
formatString('Hello', true);
formatString('Hello', false);

// problem-02
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(book => book.rating > 4);
}

filterByRating(books);

// problem-03
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => acc.concat(current));
}

concatenateArrays(['a', 'b'], ['c']);
concatenateArrays([1, 2], [3, 4], [5]);

// problem-04

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}  Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  protected model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car('Toyota', 2020, 'Corolla');
myCar.getInfo();
myCar.getModel();

// problem-05
function processValue(value: string | number): number {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value.length;
  }
}

processValue('hello');
processValue(10);

// problem-06

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {}

const products = [
  { name: 'Pen', price: 10 },
  { name: 'Notebook', price: 25 },
  { name: 'Bag', price: 50 },
];

console.log(getMostExpensiveProduct(products));
