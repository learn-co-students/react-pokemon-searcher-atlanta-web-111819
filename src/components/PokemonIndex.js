import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection : [],
    flippedPokemon : [],
    search : ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({
      pokemonCollection : pokemons
    }))
  }

  flip = (pokemon) => {
      if(!this.state.flippedPokemon.includes(pokemon)){
      let newFlippedArray = [...this.state.flippedPokemon, pokemon]
      this.setState({
        flippedPokemon: newFlippedArray
      })
    } else {
      this.setState({
        flippedPokemon : this.state.flippedPokemon.filter(card => card !== pokemon)
      })
    }
      console.log(this.state.flippedPokemon)
  }

  createPokemon = (pokemon) => {

    this.setState({
      pokemonCollection : [...this.state.pokemonCollection, pokemon]
    })
  }

  search = (e) => {
    this.setState({
      search : e.target.value
    })
  }
  render() {
    let filtered = this.state.pokemonCollection.filter(character => character.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.createPokemon}/>
        <br />
        <Search onChange={(e) => this.search(e)} />
        <br />
        <PokemonCollection collection={filtered} flip={this.flip} flippedCards={this.state.flippedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
