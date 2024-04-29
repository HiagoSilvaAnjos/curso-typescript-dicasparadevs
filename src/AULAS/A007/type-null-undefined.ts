let x;
if (typeof x === "undefined") x = 200;
console.log(x);

const createPerson = (
  firstName: string,
  lastName?: string
): { firstName: string; lastName?: string } => {
  return {
    firstName,
    lastName,
  };
};

console.log(createPerson("Hiago", "Dev"));
