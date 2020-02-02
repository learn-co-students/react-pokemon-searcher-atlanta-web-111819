import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {



  getHp = () => {
    let pokemon = this.props.pokemon.stats
    // console.log(pokemon);
    let hp = pokemon.filter(hp => hp.name === 'hp')
    return (hp[0].value);
    
    
  }



  render() {
    
    return (

      this.props.flipped.includes(this.props.pokemon.name)? 
      <Card >
        <div onClick={(e) => {this.props.handleFlip(this.props.pokemon)}}>
          <div className="image">
            <img src={this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>

      :
      <Card >
        <div onClick={(e) => {this.props.handleFlip(this.props.pokemon)}}>
          <div className="image">
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
