// const { UUID } = require("../plugins/get-id.plugin");
// const { getAge } = require("../plugins/get-age.plugin");
// const { UUID, getAge } = require("../plugins");

interface BuildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthday: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthday: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: "John", birthday: "1985-10-21" };

// const john = buildPerson(obj);

// console.log(john);
