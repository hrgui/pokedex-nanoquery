<script lang="ts">

  import { $currentPokemonId as currentPokemonId } from "./stores/pokemon";
  import { Pokemon } from "./stores/pokemon";

  function inc() {
    Pokemon.validate(currentPokemonId.get() + 1) && currentPokemonId.set(currentPokemonId.get() + 1);
  }

  function dec() {
    Pokemon.validate(currentPokemonId.get() - 1) && currentPokemonId.set(currentPokemonId.get() - 1);
  }

  const handleInputChange = (e) => {
    Pokemon.validate(+e.target.value) && currentPokemonId.set(+e.target.value);
  };
  
</script>


<div class="flex justify-center items-center space-x-4">
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    on:click={dec}
  >
    &laquo;
  </button>
  <input
    class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="number"
    value={$currentPokemonId}
    on:change={handleInputChange}
  />
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    on:click={inc}
  >
    &raquo;
  </button>
</div>
