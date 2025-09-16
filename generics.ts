class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

let stringBox = new Box<string>("Generics");
let numberBox = new Box<number>(123);
