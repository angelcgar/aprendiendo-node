const { http } = require("../plugins");

const getPokenmonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url)

  // const resp = await fetch(url);
  // const pokemon = await resp.json();

  return pokemon.name;

  // return fetch(url)
  //   .then((resp) => resp.json())
  //   // .then(() => {
  //   //   throw new Error("no hay pokemon");
  //   // })
  //   .then((pokemon) => pokemon.name);
};

module.exports = getPokenmonById;
