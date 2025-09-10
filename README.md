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

---

