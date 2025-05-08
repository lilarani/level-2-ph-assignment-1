## Blog Task

## 1. Ques: What are some differences between interfaces and types in TypeScript

?

Ans: Interface and types are both used to define the shape of objects in
typescript, but they have some key differences:

Declaretion merging: interfaces support declaration merging, which means you can
define multiple interface, types do not suport this .

extending: Both interfaces and types can be extended , an interface can extend
another interface or a type using the extends keyword. a type can extend another
type or an interface using intersection type(&)

Use cases: intercaces are generally preferred for defining the shape of objects,
especially when working with clasess. type are more versatile and can be used
for other purposes, such as defining union types, tuple types, or function
types.

## 2. Ques: What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: The kayof keyword is a typescript operator that returns a union of all
property names(keys) of a given object type. it enables types Type safe by
allowing you to work with valid propersty names only

Expample Z:

```ts
type Person = {
  name: stringl;
  age: number;
  isString: boolean;
};

type KeyPerson = keyof Person;

const key: KeyPerson = 'age';
```

## 3. Explain the difference between any, unknown, and never types in TypeScript.

ans: the any, unknown , and never types in typescript serve different purposes
in handling type flexibility and safety.

any: It use type checking for a variable. a variable declared as any can hold
values of any type, and you can perform any operation on it without the compiler
raising errors. It offers maximum flexibility but sacrifices type safety, making
it prone to runtime errors if not used carefully.

```ts
let flexiablevar: any = 'hello';
flexiablevar = 123;
flexiablevar.toUpperCase();
```

unknown: It is a type-safe counterpart to any. while a variale of type unknown
can also hold any value, you need to perform type checking or type assertion
befor performing any operations on it. this enforces type safety b ensuring that
you handle the value appropriately based on its actual type.

```ts
let unknownVar: unknown = 'Heelo';
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
```

never: It represents the type of value that never occur. it is commonly used for
functions that always throw an error or never return, or in conditional types to
exclude certain cases. it signifies that a particular code path is unreachable.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

In essence, any is used for maximum flexibility whit no type cheking unknown for
type-safe handling of values with uncertain types, and never to indicate
unreachable code paths or non-occurring values.

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

ans: an enum (short for enumertion) in typescript is a special data type that
allows you to define a set of named constants. enums make it easier to document
intent or create a set of distinct values especially useful when dealing with a
fixed set of options.

key benefits:

• Improves code readability and maintainablility

• Gives meaningful names to numeric or string values

• Helps avoid hardcoding values throughout the code

summary: Enums are a powerful feature in typescript that help you write cleaner
, more maintainable code.

## 5. What is Type Inference in TypeScript?

ans: type inference means tht typescript can automatically determine the type of
a variable even if you don't explicitly declare it.

```ts
let name = 'Neela';
```

Here , you didn't specify the type , but typescript infers that name is of type
string because you assigned a string value.

```ts
name = 123;
```

Typescript will catch the error because it already inferred the type as sting.

summary: type inference is a powerful feature of typescript that allows you to
write less code while still enjoying the benefit of static typing. it makes your
code faster to write , safer, and easier to work with.

## 6. How does TypeScript help in improving code quality and project maintainability?

ans: typescript is a typed superset of javascript that provides type safety and
bettr tooling. this helps make code more reliable , readable , and easier to
maintain especially in large projects.

1. type safety:

typescript ensures you're using the correct types in your code.

```ts
function greet(name: string) {
  console.log('hello', +name);
}
greet(123);
```

note: this reduces runtime errors caused by wrong data types.

2. Intelligent Autocompletion:

editors like vs code provide smart suggestions using typescript.

• this makes coding faster and reduces mistakes

3. Easy refactoring:

because typescript understands your code structure , renaming variables or
moving functions is safer and easier.

• you can confidently make changes without breaking your code.

4. Self-documenting code:

type definitions act like built-in documentation. by just looking at a function
signature , you understand what inputs it needs and what it returns.

```ts
function calculateTotal(price: number, tax: number) : number{...}

```

The function definition clearly explains how it works.

5. Better scalability for large projects:

with clear types and consistent patterns, teams can collaborate more effectively
on large codebases.

## 7. Provide an example of using union and intersection types in TypeScript?

## ans: 1. Union Types (|)

A union type means a variable can hold multiple possible types(any one of them).

example:

```ts
function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}

printId(101);
printId('ABC123');
```

Here , the id can be either a number or a string.

## 2. Intersection Types (&)

An intersection type combines multiple types into one. the result must satisfy
all the combined types.

example:

```ts
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const user: Person = {
  name: 'Lila',
  age: 22,
};
```

here Person must have both name and age properties it's an intersection of the
two types.
