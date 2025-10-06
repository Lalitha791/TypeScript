function printId(id: number | string) {
    if (typeof id === 'string') {
      console.log("Uppercase ID:", id.toUpperCase()); // ✅ Safe now
    } else {
      console.log("Numeric ID:", id.toFixed(2)); // ✅ Safe for number
    }
  }
  
  printId("abc123");
  printId(101.567);
  