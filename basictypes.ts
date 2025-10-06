// Basic TypeScript types: string, number, boolean, null, undefined

// string
const firstName: string = "jack";
const greeting: string = `Hello, ${firstName}!`;

// number (integers, floats, special values like NaN/Infinity)
const year: number = 2025;
const piApprox: number = 3.14;
const notANumber: number = Number("abc"); // NaN

// boolean
const isActive: boolean = true;
const isComplete: boolean = false;

// null and undefined as standalone types
const emptyValue: null = null;
const missingValue: undefined = undefined;

// Common unions with null/undefined (useful when strictNullChecks is on)
let nullableText: string | null = null;
nullableText = "now has text";

let maybeCount: number | undefined = undefined;
maybeCount = 42;

// Optional parameter implies possibly undefined
function formatName(name?: string): string {
	if (name === undefined) return "Anonymous";
	return name.toUpperCase();
}

// Type narrowing with typeof checks
function safeLength(value: string | undefined): number {
	if (typeof value === "string") {
		return value.length;
	}
	return 0;
}

// Simple usage to avoid unused variable errors in some toolchains
export const demo = {
	firstName,
	greeting,
	year,
	piApprox,
	notANumber,
	isActive,
	isComplete,
	emptyValue,
	missingValue,
	nullableText,
	maybeCount,
	formatName,
	safeLength,
};



console.log(demo);
