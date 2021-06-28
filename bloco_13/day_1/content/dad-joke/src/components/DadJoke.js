import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };

    this.fetchJoke = this.fetchJoke.bind(this);
  }

  async fetchJoke() {
    const headers = { headers: { Accept: 'application/json' } };
    const fetchReturn = await fetch('https://icanhazdadjoke.com/', headers);
    const fetchObj = await fetchReturn.json();
    this.setState({ jokeObj: fetchObj });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //salva piada no array de piadas existente
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type='button' onClick={this.saveJoke}>
          Salvar Piada
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingelement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke} </p>
          ))}
        </span>
      </div>
    );
  }
}

export default DadJoke;
