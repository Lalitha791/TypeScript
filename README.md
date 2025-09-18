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
// Type Annotation & Inference
let username: string = "Lalitha";
let score = 95; // inferred as number

// Boolean
let isLoggedIn: boolean = true;

// Array
let tags: string[] = ["typescript", "learning", "day6"];

// Tuple
let userInfo: [string, number] = ["Lalitha", 25];

// Enum
enum Role { Admin, Editor, Viewer }
let currentRole: Role = Role.Editor;

// Any Type
let dynamicData: any = "Hello";
dynamicData = 42;

// Unknown Type
let input: unknown = "Test";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// Void Type
function logMessage(): void {
  console.log("Welcome to Day 6!");
}

// Never Type
function throwError(): never {
  throw new Error("Something went wrong!");
}

// Union Type
let id: string | number = "abc123";
id = 789;

// String Literal Type
type Status = "active" | "inactive";
let userStatus: Status = "active";

// Type Alias
type UserID = string | number;
let uid: UserID = "user_001";

// Object Type
let user = {
  name: "Lalitha",
  age: 25,
  role: currentRole
};

output


Welcome to Day 6!
TEST

Error: Something went wrong!

console.log(username, score, tags, userInfo, currentRole);






---

## ✨ Introduction to Generics in TypeScript

### 🔹 What are Generics?

Generics in TypeScript allow you to create **reusable components** that can work with multiple types, while still keeping **type safety**.
They act like **placeholders for types** and get replaced at compile-time when you use the function/class/interface.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(100));    // 100
console.log(identity<string>("hello")); // "hello"
```

---

### 🔹 Why use Generics?

* **Reusability** → write once, use with different types.
* **Type safety** → prevents runtime errors by catching mistakes at compile-time.
* **Flexibility** → works with any type (string, number, object, etc.).
* **Clarity** → makes APIs easier to understand.

---

### 🔹 Common Uses of Generics

1. **Functions**

   ```ts
   function getFirst<T>(arr: T[]): T {
     return arr[0];
   }
   ```

   Works with `number[]`, `string[]`, etc.

2. **Classes**

   ```ts
   class Box<T> {
     content: T;
     constructor(value: T) {
       this.content = value;
     }
   }

   let stringBox = new Box<string>("Generics");
   let numberBox = new Box<number>(123);
   ```

3. **Interfaces**

   ```ts
   interface ApiResponse<T> {
     data: T;
     status: number;
   }

   let userResponse: ApiResponse<{ id: number; name: string }> = {
     data: { id: 1, name: "Alice" },
     status: 200,
   };
   ```

4. **Constraints**

   ```ts
   function getLength<T extends { length: number }>(item: T): number {
     return item.length;
   }

   console.log(getLength("Hello"));   // ✅ works
   console.log(getLength([1, 2, 3])); // ✅ works
   // getLength(100); ❌ error
   ```

---

### 🔹 Types vs Generics

* **Types** are fixed:

  ```ts
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

* **Generics** are flexible:

  ```ts
  function echo<T>(value: T): T {
    return value;
  }
  ```

---

### 🔹 Generics at Runtime

⚡ Important: Generics exist **only at compile-time**.

* They are used by the TypeScript compiler to check types.
* When compiled to JavaScript, **generics are erased**.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Compiles to JavaScript:

```js
function identity(value) {
  return value;
}
```

---

### ✅ Summary

* Generics = **type placeholders**.
* Provide **reusable, flexible, and type-safe** code.
* Work in **functions, classes, interfaces, and APIs**.
* Exist only at compile-time → erased at runtime.

---






A **tuple** is a fixed-size, ordered collection of elements. Think of it like a mini-array where each item can be of a different type, and once created, you can't change its contents.

### 🧠 In TypeScript:
Tuples are a special type of array with **known types and lengths**.

```ts
let user: [string, number];
user = ["Lalitha", 25]; // ✅
user = [25, "Lalitha"]; // ❌ Type mismatch
```

### 🔍 Key Features:
- **Fixed length**: You define how many elements it holds.
- **Typed positions**: Each index has a specific type.
- **Immutable structure**: You can’t add or remove elements without changing the type.

### 🛠️ Use Cases:
- Representing a pair like `[latitude, longitude]`
- Returning multiple values from a function
- Mapping fixed-format data like `[statusCode, message]`






### 📌 Program Name: `never-type-demo.ts`

### ✅ Code:
```ts
function throwError(message: string): never {
  throw new Error(message);
}

console.log("Before error");
throwError("Something went wrong!");
console.log("After error"); // ❌ This line will never run
```

---

### 🧠 Explanation:

- `throwError()` is a function that **always throws an error**.
- Because it **never returns**, its return type is `never`.
- TypeScript uses `never` to signal: “This function will not finish normally.”

---

### ❌ Why the program doesn’t terminate cleanly:

- When `throwError()` runs, it throws an exception.
- That stops the program **immediately**.
- So `"After error"` is **never printed**—the program halts at the error.

---

### 🔍 Why use `never` here?

- It helps TypeScript **understand control flow**.
- It warns developers: “Don’t expect anything after this function.”
- It’s great for **error handling**, **exhaustive checks**, and **type safety**.



