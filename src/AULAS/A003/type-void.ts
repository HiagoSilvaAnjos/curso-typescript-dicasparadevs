function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

semRetorno("Hiago", "Silva");

interface personProps {
  name: string;
  surname: string;
  sayMyName: () => void;
}

const userPro: personProps = {
  name: "John",
  surname: "Smith",

  sayMyName(): void {
    console.log(`My name is ${userPro.name} ${userPro.surname}`);
  },
};

userPro.sayMyName();
