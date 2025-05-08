## Blog Task

## 1. Ques: What are some differences between interfaces and types in TypeScript

?

Ans: Interface and types are both used to define the shape of objects in
typescript, but they have some key differences:

**Declaretion merging:** interfaces support declaration merging, which means you
can define multiple interface, types do not suport this .

** extending:** Both interfaces and types can be extended , an interface can
extend another interface or a type using the extends keyword. a type can extend
another type or an interface using intersection type(&)

**Use cases:** intercaces are generally preferred for defining the shape of
objects, especially when working with clasess. type are more versatile and can
be used for other purposes, such as defining union types, tuple types, or
function types.

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
```
