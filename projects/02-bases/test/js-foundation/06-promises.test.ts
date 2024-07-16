import { getPokenmonById } from "./../../src/js-foundation/06-promises";

describe("js-fn/06", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokenmonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("shuld return an error if pokemon is not found", async () => {
    const pokemonId = 100000000;
    try {
      await getPokenmonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (err) {
      expect(err).toBe(`Pokemon not found qith id ${pokemonId}`);
    }
  });
});
