import { atom } from "nanostores";

import { nanoquery } from "@nanostores/query";

class Pokemon {
  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  get defaultBackImage() {
    return this.data.sprites.back_default;
  }

  get defaultFrontImage() {
    return this.data.sprites.front_default;
  }

  get allImages() {
    const res = Object.values(this.data.sprites).filter((v) => typeof v === "string");
    const other = Object.values(this.data.sprites.other)
      .map((x) => Object.values(x).filter((v) => typeof v === "string"))
      .flat();
    const versions = Object.values(this.data.sprites.versions)
      .map((x) =>
        Object.values(x)
          .map((y) => Object.values(y).filter((v) => typeof v === "string"))
          .flat()
      )
      .flat();

    return [...res, ...other, ...versions];
  }

  static async get(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return new Pokemon(await res.json());
  }
}

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: async (id) => {
    return Pokemon.get(id);
  },
});

export const $currentPokemonId = atom(1);
export const $currentPokemon = createFetcherStore([$currentPokemonId]);

window.$currentPokemonId = $currentPokemonId;
window.$currentPokemon = $currentPokemon;
