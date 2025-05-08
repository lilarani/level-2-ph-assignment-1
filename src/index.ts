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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => acc.concat(current));
}

concatenateArrays(['a', 'b'], ['c']);
concatenateArrays([1, 2], [3, 4], [5]);

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

function processValue(value: string | number): number {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value.length;
  }
}

processValue('hello');
processValue(10);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    return products.reduce((maxProduct, curr) =>
      curr.price > maxProduct.price ? curr : maxProduct
    );
  }
}

const products = [
  { name: 'Pen', price: 10 },
  { name: 'Notebook', price: 25 },
  { name: 'Bag', price: 50 },
];

getMostExpensiveProduct(products);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday || day === Day.Saturday) {
    return 'Weekend';
  } else {
    return 'Weekday';
  }
}

getDayType(Day.Monday);
getDayType(Day.Sunday);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n === 'number') {
        resolve(n * n);
      } else {
        reject('Negative number not allowed');
      }
    }, 1000);
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
