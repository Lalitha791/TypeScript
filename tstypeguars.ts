// Type Guards in TypeScript: typeof, instanceof, and custom predicates

// typeof guards – great for primitives
function describeInput(value: string | number | boolean | null | undefined): string {
	if (typeof value === "string") return `string(${value.toUpperCase()})`;
	if (typeof value === "number") return `number(${value.toFixed(2)})`;
	if (typeof value === "boolean") return `boolean(${value ? "true" : "false"})`;
	if (value === null) return "null";
	return "undefined";
}

// instanceof guards – for class instances
class Dog {
	name: string;
	constructor(name: string) { this.name = name; }
	bark(): string { return `${this.name} says woof`; }
}

class Cat {
	name: string;
	constructor(name: string) { this.name = name; }
	meow(): string { return `${this.name} says meow`; }
}

type Pet = Dog | Cat;

function speak(pet: Pet): string {
	if (pet instanceof Dog) {
		return pet.bark();
	}
	return pet.meow();
}

// Custom type guard – narrows structural unions
interface User {
	name: string;
}

interface Admin extends User {
	permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
	return (
		typeof (user as Admin).permissions !== "undefined" &&
		Array.isArray((user as Admin).permissions)
	);
}

function getAccessLabel(user: User | Admin): string {
	if (isAdmin(user)) {
		return `Admin(${user.name}) with ${user.permissions.length} perms`;
	}
	return `User(${user.name})`;
}

// Demo output
const inputs = ["hello", 3.14159, true, null, undefined] as const;
const pets: Pet[] = [new Dog("Rex"), new Cat("Misty")];
const users: (User | Admin)[] = [
	{ name: "jack" },
	{ name: "jill", permissions: ["read", "write"] },
];

for (const v of inputs) {
	console.log(describeInput(v));
}

for (const p of pets) {
	console.log(speak(p));
}

for (const u of users) {
	console.log(getAccessLabel(u));
}


