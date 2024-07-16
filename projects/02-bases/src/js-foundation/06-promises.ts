import { httpClient } from "../plugins";

export const getPokenmonById = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found qith id ${id}`;
  }

  // const resp = await fetch(url);
  // const pokemon = await resp.json();

  // return fetch(url)
  //   .then((resp) => resp.json())
  //   // .then(() => {
  //   //   throw new Error("no hay pokemon");
  //   // })
  //   .then((pokemon) => pokemon.name);
};
