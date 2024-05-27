"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyage() {
        return `My age private is ${this.age}`;
    }
    sayMyName() {
        return `My name is ${this.name}`;
    }
}
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyage() {
        return `My age private is ${this.age}`;
    }
    sayMyName() {
        return `My name is ${this.name}`;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const personClass = new Person(20011000, "Hiago", 19);
const employee = new Employee(40022119, "Fábio", 20);
const personRefact = new PersonRefact(40022119, "Ana", 20);
console.log(personRefact.sayMyName());
