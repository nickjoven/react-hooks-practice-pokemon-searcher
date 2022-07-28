import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

// Create an index displaying Pokemon 'cards'
// Render each Pokemon name, sprite, and hp in a card
// When clicked, the card should toggle between displaying the front and back sprites

// Allow users to search a Pokemon by its name in order to narrow down the cards shown
// on the page

// Wire up the form to add a missing Pokemon(Bulbasaur is missing, and you can probably 
// intuit the image links to use based on the data you have).Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.

const PokemonPage = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPokemon = async () => {
      let req = await fetch('http://localhost:3001/pokemon')
      let res = await req.json()
      console.log('pokemonList', res)
      setPokemonList(res)
    }
    fetchPokemon()
  }, [])

  const searchedPokemon = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleAddPokemon = (newPokemonObject) => {
    const updatedPokemonList = [...pokemonList, newPokemonObject]
    setPokemonList(updatedPokemonList)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemonList={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
