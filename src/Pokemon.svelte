<script lang="ts">
  import { $currentPokemon as currentPokemon } from "./stores/pokemon";
  import { $currentPokemonId as currentPokemonId } from "./stores/pokemon";
  import PokemonHeader from "./PokemonHeader.svelte";
</script>

{#if $currentPokemon.loading}
<div>
  <PokemonHeader
    id={$currentPokemonId}
    name={
      "Loading"
    }
  />
  <div class="flex flex-wrap h-[calc(80vh_-_100px)] overflow-auto items-center justify-center">
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
    <div class="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
  </div>
  <PokemonHeader
    id={$currentPokemonId}
    name={
      "Loading"
    }
  />
</div>

{:else if $currentPokemon.data}
<div>
  <PokemonHeader id={$currentPokemon.data.id} name={$currentPokemon.data.name} />
  <div class="flex flex-wrap h-[calc(80vh_-_100px)] overflow-auto items-center justify-center">


      {#each $currentPokemon.data.allImages as src}
        <img class="h-[100px] object-cover shrink-0" src={src} alt={$currentPokemon.data.name} />
      {/each}


  </div>
  <PokemonHeader id={$currentPokemon.data.id} name={$currentPokemon.data.name} />
</div>

{/if}
