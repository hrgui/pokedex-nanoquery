import "./App.css";
import { useStore } from "@nanostores/react";
import { Pokemon } from "./Pokemon";
import { Pokemon as PokemonSingleton } from "./stores/pokemon";
import { $currentPokemonId } from "./stores/pokemon";
import { createHashRouter, RouterProvider } from "react-router";
import { onMount } from "nanostores";
import { Navigate } from "react-router";

const rootPathName = location.pathname;

const Nav = () => {
  const pokemonId = useStore($currentPokemonId);

  const inc = () => {
    PokemonSingleton.validate(pokemonId + 1) && $currentPokemonId.set(pokemonId + 1);
  };

  const dec = () => {
    PokemonSingleton.validate(pokemonId - 1) && $currentPokemonId.set(pokemonId - 1);
  };

  const handleInputChange = (e) => {
    PokemonSingleton.validate(+e.target.value) && $currentPokemonId.set(+e.target.value);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={dec}
      >
        &laquo;
      </button>
      <input
        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        value={pokemonId}
        onChange={handleInputChange}
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={inc}
      >
        &raquo;
      </button>
    </div>
  );
};

function PokemonPage() {
  const pokemonId = useStore($currentPokemonId);

  return (
    <div className="mx-auto w-[400px]">
      <Nav />
      <Pokemon id={pokemonId} />
      <Nav />
    </div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={`/${$currentPokemonId.get()}`} replace />,
  },
  {
    path: "/:id",
    element: <PokemonPage />,
    loader: ({ params }) => {
      $currentPokemonId.set(+params.id);
    },
  },
]);

onMount($currentPokemonId, () => {
  $currentPokemonId.subscribe((id) => {
    history.pushState(null, "", `${rootPathName}#/${id}`);
  });
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
