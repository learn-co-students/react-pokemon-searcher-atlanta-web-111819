import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
// import Search from './Search'
// import data from '../../'
// 

class PokemonCollection extends React.Component {


  filterSearch = (search) => {
    console.log(search)
    // console.log(this.props.pokemons.filter(pokemon => pokemon.name.includes(search)));
    
    let searchedPokemons = search.length >= 1? this.props.pokemons.filter(pokemon => pokemon.name.includes(search)) : this.props.pokemons
    // console.log(searchedPokemons);
    


    return searchedPokemons.map(pokemon => <PokemonCard pokemon={pokemon} handleFlip={this.props.handleFlip}  flipped={this.props.flipped}/>)
  }



  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.filterSearch(this.props.value)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
