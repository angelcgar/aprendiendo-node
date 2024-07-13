const { getUUID, getAge } = require("./plugins");

// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-desestructurin");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/04-arrow");
// const { buildMakePerson } = require("./js-foundation/05-factory");
const getPokenmonById = require("./js-foundation/06-promises");

getPokenmonById(4)
  .then((resp) => console.log({ resp }))
  .catch((err) => console.log(err))
  .finally(() => console.log("final"));

// ! Referencia a la funcion factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: "John", birthday: "1985-10-21" };

// const john = makePerson(obj);

// console.log(john);
