const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello world");
const count = returnValue<number>(4);

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Promises

const returnPromise = async (): Promise<string> => {
  return "5";
};

// Classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(
  0,
  (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
  }
);
