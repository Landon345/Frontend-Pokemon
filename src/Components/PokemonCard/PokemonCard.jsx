import React from "react";

//styled component imports
import { PokeCard, Line, Types } from "./Styles";
import { Box } from "@chakra-ui/core";

/**
 * The PokemonCard functional Component to be rendered inside the PokemonList Component.
 * @param - the pokemon object
 */
export default function PokemonCard({ pokemon }) {
  return (
    //styled component PokeCard
    <PokeCard>
      <Box py="15px" textAlign="left" pl="15px">
        {pokemon.name}
      </Box>
      <Line></Line>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        width="200px"
        height="200px"
      />

      <Box pr="15px" d="flex" justifyContent="flex-end">
        {/* Map through the types and show them */}
        {pokemon.types.map((type) => (
          <Types typeColor={type}>{type}</Types>
        ))}
      </Box>
    </PokeCard>
  );
}
