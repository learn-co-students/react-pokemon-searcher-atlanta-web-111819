import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonIndex extends React.Component {

  state = {
    pokemon: [],
    search: '',
    flippedCards: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemon => {
      const mapped = pokemon.map(p => {
        return {
          id: p.id,
          name: p.name,
          front: p.sprites.front,
          back: p.sprites.back,
          hp: p.stats[5].value
        }
      })
      this.setState({pokemon: mapped})
    })
  }

  onPokeClicked = pokemon => {
    if (this.state.flippedCards.includes(pokemon)) {
      const newFlipped = this.state.flippedCards.filter(p => p.id !== pokemon.id)
      this.setState({flippedCards: newFlipped})
    } else {
      this.setState({ flippedCards: [...this.state.flippedCards, pokemon]})
    }
  }

  onSearchChange = e => {
    console.log('filtering pokemon')
    this.setState({search: e.target.value})
  }

  filterPokemon = () => {
    return this.state.pokemon.filter(p => p.name.startsWith(this.state.search))
  }

  addPoke = poke => {
    console.log('adding poke', poke)
    this.setState({pokemon: [...this.state.pokemon, poke]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke} />
        <br />
        <Search onChange={this.onSearchChange} />
        <br />
        <PokemonCollection 
          pokemon={this.filterPokemon()} 
          flippedCards={this.state.flippedCards} 
          onPokeClicked={this.onPokeClicked}
        />
      </Container>
    )
  }
}

export default PokemonIndex
