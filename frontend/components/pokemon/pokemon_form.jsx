import React from 'react';

class PokemonForm extends React.Component {

  constructor(props) {
    super(props);
     this.types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ]

    this.state = {
      name: "",
      poke_type: "",
      attack: "",
      defense: "",
      image_url: "",
      moves: {}

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateMoves = this.updateMoves.bind(this)
  }
  render() {
    // debugger;
    return (
      <section className="pokemon-form">
        <form onSubmit={this.handleSubmit}>
          <label>Name
          <input value={this.state.name} onChange={this.update("name")}></input>
          </label>
          <br/><br/>
          <label>Attack
          <input value={this.state.attack} onChange={this.update("attack")}></input>
          </label>
          <br/><br/>
          <label>Defense
          <input value={this.state.defense} onChange={this.update("defense")}></input>
          </label>
          <br/><br/>
          <label>Move1
          <input value={this.state.moves.move1} onChange={this.updateMoves}></input>
          </label>
          <br/><br/>
          <label>Move2
          <input value={this.state.moves.move2} onChange={this.updateMoves}></input>
          </label>
          <br/><br/>
          <label>Image_URL
          <input value={this.state.image_url} onChange={this.update("image_url")}></input>
          </label>
          <br/><br/>
          <label>Type
            <select value={this.state.poke_type} onChange={this.update("poke_type")}>
              <option disabled="disabled" selected="selected"> Choose one </option>
              {this.types.map((type, idx) => (
                <option key={idx} value={type}> {type} </option>
              ))}
            </select>
          </label>
          <br/><br/>
          <button type="submit">Create Pokemon!</button>
        </form>
      </section>
    )
  }

  updateMoves(e) {
   this.setState({
     moves: Object.assign(
       {},
       this.state.moves,
       { [e.target.id]: e.target.value })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const pokemon = Object.assign({}, this.state)
    this.props.createPokemon({pokemon}).then(
      () => this.setState({
          name: "",
          poke_type: "",
          attack: "",
          defense: "",
          image_url: "",
          moves: {}

      })
    )
  }

  addMove() {
    return e => this.setState({moves: [...this.state.moves, e.target.value]});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
}


export default PokemonForm;
