import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const defaultPokemonObject = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: '',
}

const PokemonForm = ({ handleAddPokemon }) => {
  const [newPokemon, setNewPokemon] = useState(defaultPokemonObject)
  
  const handleSubmitPokemon = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl,
        }
      })
    })
    .then(req => req.json())
    .then(res => {
      handleAddPokemon(res)
      alert('New Pokemon added to bottom of list!')
    })
  }

  const handleInputChange = (e) => {
    const formPokemon = {
      ...newPokemon,
      [e.target.name]: e.target.value
    }
    setNewPokemon(formPokemon)
  } 

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...")
          handleSubmitPokemon(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleInputChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
