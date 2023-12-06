//Zadaca1.

class Car {
  constructor(make, model, year, mileage) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.mileage = mileage);
  }
  start() {
    console.log("Engine started");
  }
  drive(distance) {
    if (distance > 0) {
      this.mileage = this.mileage + distance;
    } else {
      console.log("No distance!");
    }
  }
  getMileage() {
    console.log(`The current mileage is ${this.mileage}`);
  }
}
//const myCar = new Car("Citroen", "C3", 2020, 1200);
//myCar.start();
//myCar.drive(50)
//myCar.getMileage();

//Zadaca2.

class Animal {
  constructor(type, gender, age, habitat) {
    (this.type = type), (this.gender = gender), (this.age = age);
    this.habitat = habitat;
  }
  introduce() {
    console.log(`I'm ${this.type}, and I'm ${this.gender} animal`);
  }
  info() {
    console.log(`I'm ${this.age} years old and I live in ${this.habitat}`);
  }
}
const newAnimal = new Animal("lion", "male", 15, "savanna");
const newAnimal1 = new Animal("camel", "female", 20, "desert");
const newAnimal2 = new Animal("whale", "female", 28, "ocean");

//newAnimal.introduce();
//newAnimal1.info();
//newAnimal1.introduce();
//newAnimal1.info();
//newAnimal2.introduce();
//newAnimal2.info();

//Zadaca3.

class Rectangle {
  #width;
  #height;
  constructor(color, width, height) {
    this.#width = width;
    this.#height = height;
    this.color = color;
  }
  getShapeType() {
    return "Rectangle";
  }
  get getWidth() {
    return this.#width;
  }
  get getHeight() {
    return this.#height;
  }
  set setWidth(newWidth) {
    if (newWidth > 0) {
      this.#width = newWidth;
    } else {
      console.log("Width must be a positive number!");
    }
  }
  set setHeight(newHeight) {
    if (newHeight > 0) {
      this.#height = newHeight;
    } else {
      console.log("Height must be a positive number!");
    }
  }
  getArea() {
    return this.#width * this.#height;
  }
  describe() {
    console.log(
      `The color of this rectangle is ${this.color}, width is ${
        this.#width
      } and height is ${this.#height}`
    );
  }
}
const rectangle1 = new Rectangle("orange", 15, 17);
console.log(rectangle1.getArea());
rectangle1.describe();
console.log(rectangle1.getWidth);
console.log(rectangle1.getHeight);
rectangle1.setWidth = 10;
rectangle1.setHeight = 15;

//Zadaca4.??????????????

class bankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber,
      this.accountHolder = accountHolder,
      this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
    } else {
      console.log("This amount is above your current balance. Try again!");
    }
  }
  getBalance() {
    return this.balance;
  }
}

const myAccount = new bankAccount(2512993, "Marina Stojanovic", 500);
console.log(myAccount.getBalance());
myAccount.deposit(25);
myAccount.withdraw(50);

const myAccount1 = new bankAccount(203040, "Lily O'Neil", 900);
console.log(myAccount1.getBalance());
myAccount1.deposit(60);
myAccount1.withdraw(70);
