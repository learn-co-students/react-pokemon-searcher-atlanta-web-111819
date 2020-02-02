import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    state = {
      search: '',
      pokemons: [],
      flipped: []
    }
  
    componentDidMount(){
      fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
    }

    newPokemon = (pokemon) =>{
      let oldPokemon = this.state.pokemons
      this.setState({
        pokemons: [...oldPokemon, pokemon]
      })
    }


    handleSearch = (e) => {
      console.log(e.target.value);
      this.setState({
        search: e.target.value
      })
    }

    handleFlip = (pokemon) => {
      console.log(pokemon);
      let flipped = this.state.flipped
      if(flipped.includes(pokemon.name)){
        let newArray = flipped.filter(pok => pok !== pokemon.name)
        this.setState({flipped: newArray})
      }else{
      this.setState({
        flipped: [...flipped, pokemon.name]
      })
    }
    }
    

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon} />
        <br />
        <Search onChange={this.handleSearch} value={this.state.search} />
        <br />
        <PokemonCollection flipped={this.state.flipped} value={this.state.search} pokemons={this.state.pokemons} handleFlip={this.handleFlip} />
      </Container>
    )
  }
}

export default PokemonPage
