import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ collection, flip, flippedCards }) => {
     return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {collection.map(pokemon => <PokemonCard mon={pokemon} flip={flip} flippedCards={flippedCards}/>)}
      </Card.Group>
      
     )
}


export default PokemonCollection
