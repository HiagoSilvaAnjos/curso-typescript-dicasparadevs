// Type => basicamente um objeto, onde podemos definir as propriedades desse objetos e qual o os tipos dessas respectivas propriedades
type Order = {
  student: string;
  registrationId: number;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  register(): string;
  address?: string; // O "?" siginifica que essa propriedade não é obrigatória
  orders: Order[];
};

const user: User = {
  firstName: "Hiago",
  lastName: "Silva",
  age: 19,
  email: "Hiago@gmail.com",
  password: "123456",
  register() {
    return `Hello world ${this.firstName}`;
  },
  orders: [
    {
      registrationId: 202411140022,
      student: "Hiago",
    },
  ],
};

console.log(user.register());

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Jefrey",
  lastName: "Cunha",
  age: 44,
  email: "jefrey@gmail.com",
  password: "password",
  register() {
    return `Hello world ${this.firstName}`;
  },
  address: "Rua em lugar nenhum",
  orders: [],
  books: ["Coraline", "Sr Raposo"],
};

console.log(author.register());

// Interfaces
interface UserInterface {
  firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  firstName: "Hiago",
  email: "hiago@gmail.com",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: AuthorInterface & UserInterface = {
  firstName: "",
  email: "",
  books: [""],
};

type Grade = string | number;
const grade: Grade = "10";
