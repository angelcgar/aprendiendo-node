console.log(process.env.PORT ?? 3000);

const { SHELL } = process.env;

const characters = ["flas", "Superman", "Green lantern", "Batman"];

const [, , , batman] = characters;
console.log(batman);

// console.log(SHELL);
