import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }


  handelChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {



    console.log(e.target.name.value);
    console.log(e.target.hp.value);
    console.log(e.target.frontUrl.value);
    console.log(e.target.backUrl.value);
    
    let newPokemon = {
      name: e.target.name.value,
      stats: [{value: e.target.hp.value,name: 'hp'}],
      sprites: {front: e.target.frontUrl.value,back: e.target.backUrl.value}
    }

    fetch('http://localhost:3000/pokemon',{
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
      }).then(res => res.json())
      .then(pokemon => {
        this.props.newPokemon(pokemon)
        this.setState({
            name: '',
            hp: '',
            frontUrl: '',
            backUrl: ''
        })
      })
    
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handelChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input  onChange={this.handelChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}  />
            <Form.Input onChange={this.handelChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input onChange={this.handelChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}


export default PokemonForm
