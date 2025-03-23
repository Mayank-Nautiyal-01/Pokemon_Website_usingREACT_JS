import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // Fixed initialization

  const API = "https://pokeapi.co/api/v2/pokemon?limit=100"; // Limiting for better performance

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = await Promise.all(
        data.results.map(async (currPokemon) => {
          const res = await fetch(currPokemon.url);
          return await res.json();
        })
      );

      setPokemon(detailedPokemonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Search Functionality
  const filteredPokemon = search
    ? pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemon; // If search is empty, return full list

  if (loading) {
    return (
      <div className="text-center text-2xl font-bold text-yellow-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl">
        {error.message}
      </div>
    );
  }

  return (
    <section className="p-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-emerald-400 mb-4">
          Let's Catch Pokémon!
        </h1>
      </header>

      {/*Search Box */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
        />
      </div>

      {/* Pokémon Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemon.map((curPokemon) => (
          <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
        ))}
      </div>
    </section>
  );
}

export default Pokemon;
