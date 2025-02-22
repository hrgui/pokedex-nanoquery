/* eslint-disable react/prop-types */
import { useStore } from "@nanostores/react";
import { $currentPokemon } from "./stores/pokemon";

const PokemonHeader = ({ id, name }) => {
  return (
    <h2 className="text-2xl text-center flex items-center justify-center capitalize">
      <div className="mr-2">#{id}</div>
      {name}
    </h2>
  );
};

export const Pokemon = ({ id }) => {
  const { data, loading, error } = useStore($currentPokemon);

  if (data)
    return (
      <div>
        <PokemonHeader id={data.id} name={data.name} />
        <div className="flex flex-wrap h-[calc(80vh_-_100px)] overflow-auto items-center justify-center">
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
            <div className="animate-pulse h-5 bg-gray-300 dark:bg-gray-600 rounded-full w-24"></div>
          }
        />
        <div className="flex flex-wrap h-[calc(80vh_-_100px)] overflow-auto items-center justify-center">
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
          <div className="size-[95px] mr-1 mb-1 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <PokemonHeader
          id={id}
          name={
            <div className="animate-pulse h-5 bg-gray-300 dark:bg-gray-600 rounded-full  w-24"></div>
          }
        />
      </div>
    );

  return <div>Error! {JSON.stringify(error)}</div>;
};
