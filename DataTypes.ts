
// 1. String
let name: string = "Lekhaa";
console.log("String:", name);

// 2. Number
let age: number = 25;
console.log("Number:", age);

// 3. Boolean
let isLoggedIn: boolean = true;
console.log("Boolean:", isLoggedIn);

// 4. Null
let emptyValue: null = null;
console.log("Null:", emptyValue);

// 5. Undefined
let notAssigned: undefined = undefined;
console.log("Undefined:", notAssigned);

// 6. Symbol
let sym: symbol = Symbol("id");
console.log("Symbol:", sym.toString());

// 7. BigInt
let bigNumber: bigint = 9007199254740991n;
console.log("BigInt:", bigNumber);

// 8. Any
let randomValue: any = "Hello";
randomValue = 10; // can change type
console.log("Any:", randomValue);

// 9. Unknown
let unknownValue: unknown = 15;
// must check type before using
if (typeof unknownValue === "number") {
  console.log("Unknown (number check):", unknownValue * 2);
}

// 10. Array
let numbers: number[] = [1, 2, 3, 4];
console.log("Array:", numbers);

// 11. Tuple
let tupleExample: [string, number] = ["Lekhaa", 25];
console.log("Tuple:", tupleExample);

// 12. Enum
enum Colors {
  Red,
  Green,
  Blue
}
let color: Colors = Colors.Green;
console.log("Enum:", color);

// 13. Object Literal
let person: { name: string; age: number } = { name: "Ravali", age: 30 };
console.log("Object Literal:", person);

// 14. Function Type
let add: (a: number, b: number) => number = (x, y) => x + y;
console.log("Function Type:", add(5, 3));

// 15. Void (for functions that return nothing)
function greet(name: string): void {
  console.log("Hello, " + name);
}
greet("Anshu");

// 16. Never (function that never returns)
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("This is an error!"); // Uncomment to test

// 17. Union Type
let mixed: string | number;
mixed = "Hello";
console.log("Union (string):", mixed);
mixed = 100;
console.log("Union (number):", mixed);

// 18. Literal Types
let direction: "left" | "right" = "left";
console.log("Literal Type:", direction);
// direction = "up"; // ❌ Error

// 19. Optional Property in Object
type Student = { name: string; age?: number };
let student1: Student = { name: "Vennela" };
console.log("Optional Property:", student1);
