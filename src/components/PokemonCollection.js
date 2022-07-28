import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = ({ pokemonList }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList.map((element, index) => {
        const { id, name, hp, sprites } = element
        return (
          <PokemonCard 
            key={index}
            id={id}
            name={name}
            hp={hp}
            sprites={sprites}

          />
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
