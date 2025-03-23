import React from "react";

function PokemonCard({ pokemonData }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center w-64">
      {/* Pokemon Image */}
      <div className="bg-green-100 rounded-full flex items-center justify-center p-4">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Pokemon Name */}
      <h2 className="text-xl font-bold text-gray-900 mt-4 capitalize">
        {pokemonData.name}
      </h2>

      {/* Type Badge */}
      <div className="mt-3">
        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
          {pokemonData.types.map((type) => type.type.name).join(", ")}
        </span>
      </div>

      {/* Basic Stats Section */}
      <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm mt-6">
        <p>
          <span className="font-semibold">Height:</span> {pokemonData.height}
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {pokemonData.weight}
        </p>
        <p>
          <span className="font-semibold">Speed:</span>{" "}
          {pokemonData.stats[5].base_stat}
        </p>
      </div>

      {/* Experience, Attack, Abilities Section */}
      <div className="mt-6 space-y-2 text-gray-700 text-sm">
        <p>
          <span className="font-semibold">Experience:</span>{" "}
          {pokemonData.base_experience}
        </p>
        <p>
          <span className="font-semibold">Attack:</span>{" "}
          {pokemonData.stats[1].base_stat}
        </p>
        <p>
          <span className="font-semibold">Abilities:</span>{" "}
          {pokemonData.abilities[0].ability.name}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
