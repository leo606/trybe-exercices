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
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
  }

  async fetchJoke() {
    this.setState({ loading: true }, async () => {
      try {
        const headers = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', headers);
        const requestObj = await requestReturn.json();
        this.setState({ loading: false, jokeObj: requestObj });
      } catch (err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <h4>{this.state.jokeObj.joke}</h4>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada
        </button>
      </div>
    );
  }

  render() {
    const loadingElmt = <span>Loading...</span>;
    const { loading, storedJokes } = this.state;
    return (
      <div>
        <ul>
          {storedJokes.map(({ id, joke }) => (
            <li key={id}>{joke}</li>
          ))}
        </ul>
        {loading ? loadingElmt : this.renderJokeElement()}
      </div>
    );
  }
}

export default DadJoke;
