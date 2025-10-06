class Dog {
    bark() { console.log("Woof!"); }
  }
  class Cat {
    meow() { console.log("Meow!"); }
  }
  
  function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      animal.bark(); // ✅ Safe
    } else {
      animal.meow(); // ✅ Safe
    }
  }
  
  makeSound(new Dog());
  makeSound(new Cat());
  