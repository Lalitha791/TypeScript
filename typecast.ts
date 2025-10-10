// Small Type Casting Example (Node-safe)

let unknownValue: unknown = "Hello TypeScript";

// Cast unknownValue to string to access string methods
const messageLength: number = (unknownValue as string).length;

console.log("Length of message:", messageLength);

// DOM example guarded to avoid errors when running in Node (no DOM types)
const maybeDoc: any = (globalThis as any).document;
if (maybeDoc) {
  const inputElement: any = maybeDoc.createElement("input");
  inputElement.value = "Lalitha";
  console.log("Input value:", inputElement.value);
} else {
  console.log("DOM not available in this environment; skipping DOM casting example.");
}
