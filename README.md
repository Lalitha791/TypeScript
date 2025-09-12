# TypeScript
TypeScript the JavaScript framework



### 📘 TypeScript Basics — short Notes

#### ✅ What is TypeScript?
- Superset of JavaScript with **static typing**
- Compiles to plain JavaScript
- Helps catch errors early and improves code readability

#### 🔤 Core Syntax
```ts
let username: string = "Lalitha";
let age: number = 25;
let isActive: boolean = true;
```

#### 🧠 Functions
```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

#### 📦 Interfaces
```ts
interface User {
  name: string;
  age: number;
}
```

#### 🧱 Classes
```ts
class Person {
  constructor(public name: string) {}
}
```

#### 🔁 Enums
```ts
enum Role {
  Admin,
  User,
  Guest
}
```

#### 🧩 Type Aliases & Union Types
```ts
type ID = string | number;
```

#### 🛡️ Optional & Default Parameters
```ts
function log(msg: string = "Default"): void {
  console.log(msg);
}
```


Section 2. Basic Types

Type Annotation – learn how to use type annotation to define the static type for variables, function parameters, and return values.

Type Inference – explain where and how TypeScript infers types of variables.

Number – learn about the numeric types including floating-point numbers and big integers.
String – show you how to use the string type in TypeScript.
Boolean – guide you on the boolean type and how to use it effectively.
Object Type – introduce you to the object type that represents non-primitive values.

Array – show you how to use an array and its operations.
Tuple – learn how to store a fixed number of elements with known types in a tuple.

Enum – show you how to define a group of named constants using the enum type.

Any Type – learn how to use the any type to store a value of any type in a variable.

Unknown Type – show you how to create a variable that can hold a value of any type but require type checking before use.

Void type – show you how to use the void type as the return type of functions that do not return any value.

Never Type – learn how to use the never type that contains no value.

Union Types – guide you on how to store a value of one or several types in a variable with the union type.

String Literal Types – learn to define a type that accepts only a specified string literal.

Type Aliases – show you how to define new names for types using type aliases.
---

