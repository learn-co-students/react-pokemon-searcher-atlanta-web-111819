import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const {name, hp, front, back} = this.props.pokemon
    return (
      <Card>
        <div onClick={() => this.props.onPokeClicked(this.props.pokemon)}>
          <div className="image">
            <img src={this.props.flipped ? back : front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
