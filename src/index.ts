// FIXME: Tipos básicos

// number
let age: number = 50;

// string
const user_name: string = "Hiagozera";

// boolean
const isValid: boolean = true;

// um tipo que pode ser qualquer coisa => any
let idk: any = 5;
idk = "12";
idk = true;

// Lista de numbers
const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// Lista de strings
const names: string[] = ["John", "Hiago", "Filipe", "jane"];
// Lista de booleans
const valid: boolean[] = [true, false, false];

// FIXME: Tupla
// É uma variável que usamos quando queremos uma variável com um determinado tipo de valor em uma detreminada ordem

const person: [number, string] = [40, "Hiago"];

// Lista de tuplas
const people: [number, string][] = [
  [100, "John"],
  [201, "Lara"],
  [300, "Doe"],
];

// FIXME: Intersections
// Usamos quando queremos que uma variável possua um tipo ou outro
const productId: string | number | boolean = true;

// Enum
enum Direction {
  Up = 1,
  Down = 2,
  left = "Esquerda",
  Right = "Direita",
}

const direction = Direction.Up;

// Type assertions
const valueAny: any = 1;

let valueItem = <number>valueAny;
