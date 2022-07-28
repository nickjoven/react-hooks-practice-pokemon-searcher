import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = ({ pokemonList }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {
        pokemonList.map((pokemon) => {
          const { id, name, hp, sprites } = pokemon
          return (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              hp={hp}
              sprites={sprites}
            />
          )
        })
      }
    </Card.Group>
  );
}

export default PokemonCollection;
