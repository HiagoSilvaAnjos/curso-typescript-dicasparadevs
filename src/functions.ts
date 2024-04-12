interface MathFunc {
  (y: number, x: number): number;
}

const sum: MathFunc = (numOne: number, numTwo: number) => {
  return numOne + numTwo;
};

// Void => função sem retorno
const log = (message: string): void => {
  console.log(`Hey man ${message}`);
};
