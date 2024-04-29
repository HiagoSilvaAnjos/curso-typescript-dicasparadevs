// Array<T> - T[]

// Generics
function multiplyArgs(...args: Array<number>) {
  return args.map((arg) => arg * 2);
}

const result = multiplyArgs(1, 10, 20, 50);
console.log(result);

function concatArgsTypeString(...args: string[]) {
  return args.reduce((acc, arg) => acc + arg, "");
}

console.log(concatArgsTypeString("food", "soda", "carne"));
