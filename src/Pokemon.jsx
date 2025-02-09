import { useStore } from "@nanostores/react";
import { $currentPokemon } from "./stores/pokemon";

const PokemonHeader = ({ id, name }) => {
  return (
    <h2 className="text-2xl text-center flex gap-2 items-center justify-center">
      #{id} {name}
    </h2>
  );
};

export const Pokemon = ({ id }) => {
  const { data, loading, error } = useStore($currentPokemon);

  if (data)
    return (
      <div>
        <PokemonHeader id={data.id} name={data.name} />
        <div className="flex flex-wrap h-[80vh] overflow-auto items-center justify-center">
          {data.allImages.map((src) => (
            <img className="h-[100px] object-cover shrink-0" key={src} src={src} />
          ))}
        </div>
        <PokemonHeader id={data.id} name={data.name} />
      </div>
    );
  if (loading)
    return (
      <div>
        <PokemonHeader
          id={id}
          name={
            <div className="animate-pulse h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full w-24 mb-2.5"></div>
          }
        />
        <div className="flex flex-wrap h-[80vh] overflow-auto items-center justify-center">
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[100px] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <PokemonHeader
          id={id}
          name={
            <div className="animate-pulse h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          }
        />
      </div>
    );

  return <div>Error! {JSON.stringify(error)}</div>;
};
