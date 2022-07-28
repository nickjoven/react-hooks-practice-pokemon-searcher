import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const defaultPokemonObject = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: '',
}

const PokemonForm = ({ handleAddNewPokemon }) => {
  const [newPokemon, setNewPokemon] = useState(defaultPokemonObject)

  const handleInputChange = (e) => {
    const updatedPokemon = {
      ...newPokemon,
      [e.target.name]: e.target.value
    }
    setNewPokemon(updatedPokemon)
    console.log(newPokemon)
    alert('New pokemon added to end of list!')
  }

  const handleSubmit = async (e) => {
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
          back: newPokemon.backUrl
        }
      })
    })
    .then(req => req.json())
    .then(res => {
      handleAddNewPokemon(res)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...")
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name}
            onChange={handleInputChange}
          />
          <Form.Input fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemon.hp}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
