interface IPerson {
  id: number;
  sayMyName(): string;
}
class Person implements IPerson {
  id: number;
  protected name: string; // Com o protected, a propriedade so pode ser acessada dentro de sua própria classe ou de suas subclasses
  private age: number; // Com o private, a propriedade so pode ser acessada dentro de sua própria classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyage(): string {
    return `My age private is ${this.age}`;
  }

  sayMyName(): string {
    return `My name is ${this.name}`;
  }
}

// Mesma coisa que acima
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}

  sayMyage(): string {
    return `My age private is ${this.age}`;
  }

  sayMyName(): string {
    return `My name is ${this.name}`;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }
}

const personClass = new Person(20011000, "Hiago", 19);
const employee = new Employee(40022119, "Fábio", 20);
const personRefact = new PersonRefact(40022119, "Ana", 20);

console.log(personRefact.sayMyName());
