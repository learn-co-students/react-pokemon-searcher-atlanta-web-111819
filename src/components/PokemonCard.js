import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = (props) => {
    return (
      <Card>
        <div onClick={() => props.flip(props.mon)}>
          <div className="image">
            <img alt="oh no!" src={props.flippedCards.includes(props.mon) ? props.mon.sprites.back : props.mon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{props.mon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {props.mon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
    }

export default PokemonCard
