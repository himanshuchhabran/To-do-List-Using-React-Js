//javascript and classes

//OOP

//Object - Collection of properties and methods

//Class - Blueprint for creating objects

//Constructor - Special method for initializing new objects

//Inheritance - Mechanism for one class to inherit properties and methods from another class
//Example of inheritance
class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name); // Call the parent class constructor
    }

    speak(){
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.      

//Encapsulation - Bundling data and methods within a class
//Example of encapsulation
class Person {
    #name; // private field

    constructor(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }
}

const person = new Person('Alice');
console.log(person.getName()); // Alice
person.setName('Bob');
console.log(person.getName()); // Bob   



//Polymorphism - Ability to use a single interface for different data types
//Example of polymorphism
class Shape {
    area(){
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});

//Abstraction - Hiding complex implementation details and showing only essential features
//Example of abstraction
class Car {
    constructor(brand){
        this.brand = brand;
    }

    start(){
        this.#igniteEngine();
        console.log(`${this.brand} car started.`);
    }

    #igniteEngine(){ // private method
        console.log('Engine ignited.');
    }
}

const car = new Car('Toyota');
car.start(); // Engine ignited. Toyota car started. 

//why use OOP?  
//1. Code Reusability
//2. Modularity
//3. Maintainability
//4. Real-world modeling

//parts of oop  
//object literal

//constructor function - new keyword ka use krna pdta h jo automatic ek new copy banata h

// const promise1 = new Promise();

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}


const user1 = User('john_doe',5,true);
console.log(user1);


//prototype
