# @hrgui/pokedex-nanoquery

An example of PokeAPI using nanostores and nanoquery.

# Getting Started

bun i

# What's fascinating about nanostores and nanoquery?

```js
export const $currentPokemonId = atom(1);
window.$currentPokemonId = $currentPokemonId;
```

This is really simple and elegant and not necessarily bound to a framework. nanostores/nanoquery works in React, Svelte, Vue, Preact, Lit, you name it. It can even work on basic HTML also!

I can subscribe to changes like the following:

```js
$currentPokemonId.subscribe((x) => console.log(x));
$currentPokemonId.set(25);

// 25 will be printed out
```
