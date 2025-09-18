function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
